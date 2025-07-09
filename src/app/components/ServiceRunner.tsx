import CheckAccount from "./CheckAccountUI";  
import CheckAccountHistory from "./CheckAccountHistoryUI";

export default function ServiceRunner({ serviceKey }: { serviceKey: string }) {
  switch (serviceKey) {
    case "check-account-history":
      return <CheckAccountHistory />;
    case "check-account":
      return <CheckAccount />;
    default:
      return null;
  }
} 