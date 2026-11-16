import {
  BadgeCheck, Boxes, BugOff, Building2, Calculator, Clock, Cloud, Code2, Database, Eye, Globe, Hammer, Handshake,
  Headset, Lightbulb, ListChecks, Lock, Megaphone, Network, PenTool, Rocket, ScanSearch, ShieldCheck, Smartphone,
  Target, Users, Workflow, Wrench,
  type LucideIcon, type LucideProps,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  BadgeCheck, Boxes, BugOff, Building2, Calculator, Clock, Cloud, Code2, Database, Eye, Globe, Hammer, Handshake,
  Headset, Lightbulb, ListChecks, Lock, Megaphone, Network, PenTool, Rocket, ScanSearch, ShieldCheck, Smartphone,
  Target, Users, Workflow, Wrench,
};

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = icons[name] ?? Boxes;
  return <Cmp strokeWidth={1.75} {...props} />;
}
