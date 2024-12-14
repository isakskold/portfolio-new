// StatusBadge.tsx
interface StatusBadgeProps {
  status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusClasses = () => {
    switch (status) {
      case "Completed":
        return "bg-green-500 text-black";
      case "Archived":
        return "bg-red-500 text-black";
      case "In-progress":
        return "bg-yellow-500 text-black";
      default:
        return "bg-gray-500 text-black";
    }
  };

  return (
    <span
      className={`rounded-[3.75rem] border-2 border-solid border-black p-2 text-xs font-semibold sm:text-base ${getStatusClasses()}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
