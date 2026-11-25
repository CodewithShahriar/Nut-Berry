import { NextResponse } from "next/server";

interface OrderStore {
  orderId: string;
  createdAt: string;
  customerName: string;
  phone: string;
  address: string;
  city: string;
  paymentMethod: string;
  items: any[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  status: string;
}

// In-memory persistent order record for local full-stack server
const ORDERS_DB: OrderStore[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { customerName, phone, address, city, paymentMethod, items, subtotal, deliveryFee, total } = body;

    if (!customerName || !phone || !address || !items || items.length === 0) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required customer details." },
        { status: 400 }
      );
    }

    const orderId = `NB-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`;

    const newOrder: OrderStore = {
      orderId,
      createdAt: new Date().toISOString(),
      customerName,
      phone,
      address,
      city: city || "Dhaka",
      paymentMethod: paymentMethod || "cod",
      items,
      subtotal,
      deliveryFee: deliveryFee ?? 60,
      total,
      status: "Processing",
    };

    ORDERS_DB.push(newOrder);

    return NextResponse.json({
      success: true,
      message: "Order placed successfully!",
      orderId,
      order: newOrder,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process order" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    orders: ORDERS_DB,
  });
}
