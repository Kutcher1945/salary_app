'use client';

import { useEffect, useRef, useState } from 'react';
import { Sparkles, ScanLine } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Html5QrcodeScanner } from 'html5-qrcode';

export default function SalesPage() {
  const [form, setForm] = useState({
    product: '',
    barcode: '',
    category: '',
    quantity: 1,
    price: '',
    discount: '',
    date: new Date().toISOString().slice(0, 16),
    notes: '',
  });

  const [showScanner, setShowScanner] = useState(false);
  const scannerRef = useRef<HTMLDivElement>(null);

  const price = Number(form.price || 0);
  const quantity = Number(form.quantity || 0);
  const discount = Number(form.discount || 0);
  const total = price * quantity * (1 - discount / 100);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('✅ Продажа отправлена:', { ...form, total });
    setForm({
      product: '',
      barcode: '',
      category: '',
      quantity: 1,
      price: '',
      discount: '',
      date: new Date().toISOString().slice(0, 16),
      notes: '',
    });
    setShowScanner(false);
  };

  useEffect(() => {
    if (showScanner && scannerRef.current) {
      const scanner = new Html5QrcodeScanner(
        'scanner',
        { fps: 10, qrbox: 250 },
        false
      );
      scanner.render(
        (decodedText) => {
          setForm((prev) => ({ ...prev, barcode: decodedText }));
          setShowScanner(false);
          scanner.clear();
        },
        (error) => {
          console.warn('Ошибка сканирования:', error);
        }
      );

      return () => {
        scanner.clear().catch(console.error);
      };
    }
  }, [showScanner]);

  return (
    <main className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-2 text-gray-900 flex items-center gap-2">
        <Sparkles className="text-blue-500" size={28} />
        Записать продажу
      </h1>
      <p className="text-gray-600 mb-6">
        🧾 Заполните форму ниже, чтобы добавить новую продажу.
      </p>

      <form onSubmit={handleSubmit}>
        <Card className="w-full p-6 space-y-6 border border-gray-200 shadow">

          {/* Barcode Scanner Section */}
          <div className="space-y-2">
            <Label htmlFor="barcode">Штрихкод</Label>
            <div className="flex gap-2">
              <Input
                id="barcode"
                name="barcode"
                value={form.barcode}
                onChange={handleChange}
                placeholder="Сканируйте или введите вручную"
              />
              <Button
                type="button"
                onClick={() => setShowScanner(true)}
                className="flex items-center gap-2 bg-blue-500 text-white hover:bg-blue-600"
              >
                <ScanLine size={18} />
                Сканировать
              </Button>
            </div>
          </div>

          {/* Product & Category */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="product">Наименование товара</Label>
              <Input
                id="product"
                name="product"
                value={form.product}
                onChange={handleChange}
                placeholder="например, Футболка Лето"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Категория</Label>
              <Input
                id="category"
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="например, Футболки"
                required
              />
            </div>
          </div>

          {/* Quantity, Price, Discount */}
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="quantity">Количество</Label>
              <Input
                id="quantity"
                name="quantity"
                type="number"
                value={form.quantity}
                onChange={handleChange}
                min="1"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Цена за единицу</Label>
              <Input
                id="price"
                name="price"
                type="number"
                value={form.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="discount">Скидка (%)</Label>
              <Input
                id="discount"
                name="discount"
                type="number"
                value={form.discount}
                onChange={handleChange}
                min="0"
                max="100"
                placeholder="например, 10"
              />
            </div>
          </div>

          <div className="text-sm text-gray-700 font-medium">
            💰 Общая сумма со скидкой:{' '}
            <span className="font-bold text-blue-600">₸{total.toFixed(2)}</span>
          </div>

          {/* Date and Notes */}
          <div className="space-y-2">
            <Label htmlFor="date">Дата и время</Label>
            <Input
              id="date"
              name="date"
              type="datetime-local"
              value={form.date}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Примечание</Label>
            <Textarea
              id="notes"
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Опционально: имя клиента, акция и т.д."
              rows={3}
            />
          </div>

          <div className="pt-4">
            <Button type="submit" className="bg-black text-white hover:bg-gray-800">
              Сохранить продажу
            </Button>
          </div>
        </Card>
      </form>

      {/* Scanner Modal */}
      {showScanner && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4">
          <div className="relative w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-black">📷 Сканирование штрихкода</h2>
              <button
                onClick={() => setShowScanner(false)}
                className="text-gray-600 hover:text-red-500 transition text-sm"
              >
                Закрыть ✕
              </button>
            </div>
            <div
              id="scanner"
              ref={scannerRef}
              className="w-full h-[300px] rounded border border-gray-300"
            />
            <p className="text-center text-sm text-gray-600 mt-2">
              Наведите камеру на штрихкод. Сканирование произойдет автоматически.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
