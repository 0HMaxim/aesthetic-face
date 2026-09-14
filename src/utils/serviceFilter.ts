// src/utils/serviceFilter.ts
import { services } from '../data/services';
import type { LocalizedText } from '../types/LocalizedText';

export interface ServiceFilterOption {
    value: 'all' | 'general' | number;
    label: LocalizedText;
}

interface HasServiceId {
    serviceId?: number;
    isActive?: boolean;
}

/**
 * Строит опции фильтра "Все / Загальні / <услуга>" на основе
 * произвольного списка сущностей (FAQ, фото и т.д.), у которых есть serviceId.
 * Показывает только те услуги, у которых реально есть привязанные записи.
 */
export function buildServiceFilterOptions<T extends HasServiceId>(
    items: T[],
): ServiceFilterOption[] {
    const activeItems = items.filter((item) => item.isActive !== false);

    const serviceIdsWithItems = Array.from(
        new Set(
            activeItems
                .filter((item) => item.serviceId !== undefined)
                .map((item) => item.serviceId as number),
        ),
    );

    const serviceOptions: ServiceFilterOption[] = serviceIdsWithItems
        .map((id) => services.find((s) => s.id === id))
        .filter((service): service is (typeof services)[number] => Boolean(service))
        .map((service) => ({ value: service.id, label: service.title }));

    return [
        { value: 'all', label: { uk: 'Всі', ru: 'Все', de: 'Alle', en: 'All' } },
        { value: 'general', label: { uk: 'Загальні', ru: 'Общие', de: 'Allgemein', en: 'General' } },
        ...serviceOptions,
    ];
}