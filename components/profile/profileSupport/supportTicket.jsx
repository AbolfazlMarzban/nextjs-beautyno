export default function SupportTicket({}) {
  return (
    <div className="w-full border border-1 rounded-xl p-2 px-2 my-4">
      <ul className="flex items-center justify-between ">
        <li>
          <span className="text-lg max-sm:text-xs">Ticket's Subject</span>
        </li>
        <li className="flex items-center">
          <span className="max-sm:text-xs">Ticket's Date</span>
        </li>
        <li>
          <span className="text-lg max-sm:text-xs">Ticket's Status</span>
        </li>
      </ul>
    </div>
  );
}
