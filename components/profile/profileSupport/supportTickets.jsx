import SupportTicket from "./supportTicket"

export default function SupportTickets({}){
    return(
        <div className="w-full px-2 mt-4">
            <div className="border border-1 p-2 rounded-xl">
                    <SupportTicket />
                    <SupportTicket />
                    <SupportTicket />
                    <SupportTicket />
                    <SupportTicket />

            </div>
        </div>
    )
}