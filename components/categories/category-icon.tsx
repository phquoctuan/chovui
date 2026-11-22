import { AlertCircle, Building2, Briefcase, BriefcaseBusiness, Car, ChevronRight, Laptop, MonitorSmartphone, Menu, Sparkles,
  Mop, PawPrint, Dog, Utensils, AirVent, HousePlug, ToyBrick, Blocks, Footprints, Baby,
  Shirt, ShoppingBag, Gem, Watch, Gamepad2, Palette, Construction, Wrench, Handshake, ConciergeBell
 } from "lucide-react";

export function getCategoryIcon(template: string){
  const className = "size-5";
  
  switch (template) {
    case "real-estate":
      return <Building2 className={className} />;
    case "vehicles":
      return <Car className={className} />;
    case "electronics":
      return <MonitorSmartphone className={className} />;
    case "jobs":
      return <BriefcaseBusiness className={className} />;
    case "home-services":
      return <Mop className={className} />;
    case "pets":
      return <Dog className={className} />;
    case "food":
      return <Utensils className={className} />;
    case "major-appliances":
      return <AirVent className={className} />;
    case "home-garden":
      return <HousePlug className={className} />;
    case "baby-kids":
      return <Baby className={className} />;
    case "fashion":
      return <Shirt className={className} />;
    case "hobbies":
      return <Gamepad2 className={className} />;
    case "tools":
      return <Wrench className={className} />;
    case "services":
      return <Handshake className={className} />;
    default:
      return <AlertCircle className={className} />;
  }
}