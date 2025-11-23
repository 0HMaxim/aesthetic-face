import { Link, Outlet } from "react-router-dom";

export default function AdminPage() {
  return (
      <div className="min-h-screen bg-gray-50 text-foreground p-8">
        <Link
            to="/"
            className="p-4 bg-white shadow rounded-lg hover:shadow-lg transition"
        >
          Home
        </Link>

        <h1 className="text-3xl font-bold mb-6">Адмін Панель</h1>

        <div className="flex flex-col gap-4">
          <Link
              to="/admin/blogs"
              className="p-4 bg-white shadow rounded-lg hover:shadow-lg transition"
          >
            📝 Створити або редагувати блог
          </Link>

          <Link
              to="/admin/employees"
              className="p-4 bg-white shadow rounded-lg hover:shadow-lg transition"
          >
            👨‍⚕️ Керування докторами
          </Link>

          <Link
              to="/admin/faq"
              className="p-4 bg-white shadow rounded-lg hover:shadow-lg transition"
          >
            ❓ Часті запитання (FAQ)
          </Link>

          <Link
              to="/admin/prices"
              className="p-4 bg-white shadow rounded-lg hover:shadow-lg transition"
          >
            💲 Ціни
          </Link>

          <Link
              to="/admin/services"
              className="p-4 bg-white shadow rounded-lg hover:shadow-lg transition"
          >
            ⚙️ Сервіси
          </Link>

          {/* ✅ Нове посилання на сабсервіси */}
          <Link
              to="/admin/subservices"
              className="p-4 bg-white shadow rounded-lg hover:shadow-lg transition"
          >
            🧩 Сабсервіси
          </Link>

          <Link
              to="/admin/specials"
              className="p-4 bg-white shadow rounded-lg hover:shadow-lg transition"
          >
            🈹 Акції
          </Link>

          <Link
              to="/admin/photos"
              className="p-4 bg-white shadow rounded-lg hover:shadow-lg transition"
          >
            📸 Photos
          </Link>
        </div>

        <div className="mt-8">
          <Outlet />
        </div>
      </div>
  );
}
