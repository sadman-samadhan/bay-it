import {
  Boxes, BugOff, Building2, Calculator, Clock, Cloud, Code2, Database, Flame, Gauge, Globe, Hammer,
  Handshake, Headset, HeartPulse, House, KeyRound, Landmark, Lightbulb, LineChart, Lock, Megaphone, Network,
  PenTool, Rocket, ScanSearch, ShieldCheck, ShoppingCart, Smartphone, TrendingUp, Truck, Users, Wallet,
  Workflow, Wrench,
  type LucideIcon, type LucideProps,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Boxes, BugOff, Building2, Calculator, Clock, Cloud, Code2, Database, Flame, Gauge, Globe, Hammer,
  Handshake, Headset, HeartPulse, House, KeyRound, Landmark, Lightbulb, LineChart, Lock, Megaphone, Network,
  PenTool, Rocket, ScanSearch, ShieldCheck, ShoppingCart, Smartphone, TrendingUp, Truck, Users, Wallet,
  Workflow, Wrench,
};

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = icons[name] ?? Boxes;
  return <Cmp {...props} />;
}
