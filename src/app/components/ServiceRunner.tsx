import CheckAccount from "./CheckAccountUI";  
import CheckAccountHistory from "./CheckAccountHistoryUI";

interface ServiceRunnerProps {
  serviceKey: string;
}

export default function ServiceRunner({ serviceKey }: ServiceRunnerProps) {
  switch (serviceKey) {
    case "check-account-history":
      return <CheckAccountHistory />;
    case "check-account":
      return <CheckAccount />;
    default:
      return null;
  }
}