'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

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
  };

  return (
    <main className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-2 text-gray-900 flex items-center gap-2">
        <Sparkles className="text-blue-500" size={28} />
        Записать продажу
      </h1>
      <p className="text-gray-600 mb-6">
        🧾 Заполните форму ниже, чтобы добавить новую продажу.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Barcode */}
        <div className="space-y-2">
          <Label htmlFor="barcode">Штрихкод</Label>
          <Input
            id="barcode"
            name="barcode"
            value={form.barcode}
            onChange={handleChange}
            placeholder="Введите вручную"
          />
        </div>

        {/* Product and Category */}
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

        {/* Total */}
        <div className="text-sm text-gray-700 font-medium">
          💰 Общая сумма со скидкой:{' '}
          <span className="font-bold text-blue-600">₸{total.toFixed(2)}</span>
        </div>

        {/* Date */}
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

        {/* Notes */}
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

        {/* Submit */}
        <div className="pt-4">
          <Button type="submit" className="bg-black text-white hover:bg-gray-800">
            Сохранить продажу
          </Button>
        </div>
      </form>
    </main>
  );
}
