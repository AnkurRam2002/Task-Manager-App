import { notFound } from "next/navigation";

export const dynamicParams = true

export async function generateStaticParams() {
    const res = await fetch('https://task-manager-app-1-y3zp.onrender.com/tickets');
    const tickets = await res.json();

    return tickets.map((ticket) => ({
            id: ticket.id
    }));
}
async function getTicket(id) {

    await new Promise(resolve => setTimeout(resolve, 1500)); // simulate slow connection

    const res = await fetch('https://task-manager-app-1-y3zp.onrender.com/tickets/' + id, {
        next: {
            revalidate: 60
        }
    })

    if (!res.ok) {
        notFound();
    }   

    return res.json();
}

export default async function TicketDetails({ params }) {
    const ticket = await getTicket(params.id);
    return (
        <main>
            <nav>
                <h2>Ticket Details</h2>
            </nav>
            <div className="card">
                <h3>{ticket.title}</h3>
                <small>Created by {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </div>
        </main>
    )
}
