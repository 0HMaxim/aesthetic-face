import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { db } from "../firebase";
import type { GeneralInfo } from "../models/GeneralInfo";

export function useGeneralInfo(businessSlug: string | undefined) {
    const [info, setInfo] = useState<GeneralInfo | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!businessSlug) return;

        const fetchData = async () => {
            setLoading(true);
            try {
                const snap = await get(ref(db, `businesses/${businessSlug}/generalInfo`));
                if (snap.exists()) {
                    setInfo(snap.val());
                }
            } catch (err) {
                console.error("Error fetching GeneralInfo:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [businessSlug]);

    return { info, loading };
}
