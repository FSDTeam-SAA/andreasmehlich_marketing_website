import { Fragment } from "react";
import {
  Bot,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Clock,
  CreditCard,
  Headphones,
  Inbox,
  LayoutDashboard,
  Mail,
  MessageSquare,
  MonitorSmartphone,
  Phone,
  Settings,
  ShieldCheck,
  SquareCheck,
  Users,
  X,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "€49",
    note: "/ month",
    accent: "cyan",
    border: "border-cyan-300/40",
    text: "text-cyan-300",
  },
  {
    name: "Pro",
    price: "€129",
    note: "/ month",
    badge: "Best Seller",
    accent: "blue",
    border: "border-blue-400/70",
    text: "text-blue-300",
  },
  {
    name: "Scale",
    price: "€249",
    note: "/ month",
    accent: "violet",
    border: "border-violet-400/50",
    text: "text-violet-300",
  },
  {
    name: "Enterprise",
    price: "€399+",
    note: "/ month",
    subNote: "Custom Pricing",
    accent: "pink",
    border: "border-pink-400/50",
    text: "text-pink-300",
  },
];

const sections = [
  {
    title: "CRM & Operations",
    icon: LayoutDashboard,
    rows: [
      { feature: "Assistant", icon: Bot, values: [true, true, true, true] },
      { feature: "Live View", icon: MonitorSmartphone, values: [true, true, true, true] },
      { feature: "Tasks", icon: SquareCheck, values: [true, true, true, true] },
      { feature: "Calendar", icon: CalendarDays, values: [true, true, true, true] },
      { feature: "Inbox", icon: Inbox, values: [true, true, true, true] },
      { feature: "Website", icon: MonitorSmartphone, values: [true, true, true, true] },
      { feature: "Accounting", icon: CreditCard, values: [true, true, true, true] },
      { feature: "Employees", icon: Users, values: [false, true, true, true] },
      { feature: "HR", icon: BriefcaseBusiness, values: [false, false, true, true] },
      { feature: "Multi Location", icon: Settings, values: [false, false, true, true] },
    ],
  },
  {
    title: "AI Features",
    icon: Bot,
    rows: [
      { feature: "AI Phone Assistant", icon: Phone, values: [false, true, true, true] },
      { feature: "WhatsApp Assistant", icon: MessageSquare, values: [true, true, true, true] },
      { feature: "Website AI Chatbot", icon: MessageSquare, values: [true, true, true, true] },
      { feature: "Dashboard Assistant", icon: LayoutDashboard, values: [true, true, true, true] },
      { feature: "Mobile App Assistant", icon: MonitorSmartphone, values: [false, true, true, true] },
    ],
  },
  {
    title: "Included Usage",
    icon: CircleDollarSign,
    rows: [
      { feature: "AI Phone Minutes", icon: Clock, values: ["-", "250 min / month", "750 min / month", "Custom"] },
      { feature: "WhatsApp Minutes", icon: Clock, values: ["120 min / month", "400 min / month", "1,500 min / month", "Custom"] },
      { feature: "Website Chatbot Conversations", icon: MessageSquare, values: ["100 / month", "400 / month", "2,000 / month", "Custom"] },
      { feature: "Dashboard Assistant Messages", icon: LayoutDashboard, values: ["500 / month", "2,000 / month", "10,000 / month", "Custom"] },
      { feature: "Mobile App Assistant Messages", icon: MonitorSmartphone, values: ["-", "2,000 / month", "10,000 / month", "Custom"] },
    ],
  },
  {
    title: "Employees",
    icon: Users,
    rows: [
      { feature: "Employees Included", icon: Users, values: ["0", "Up to 3 Employees", "Up to 10 Employees", "Custom"] },
      { feature: "Additional Employee Seats", icon: Users, values: ["-", "€15 / extra employee / month", "€15 / extra employee / month", "Custom"] },
      { feature: "HR Features", icon: BriefcaseBusiness, values: [false, false, true, true] },
      { feature: "Team Chat & Communication", icon: MessageSquare, values: [false, false, true, true] },
      { feature: "Multi Location Support", icon: Settings, values: [false, false, true, true] },
    ],
  },
  {
    title: "Support & Services",
    icon: Headphones,
    rows: [
      { feature: "Email Support", icon: Mail, values: [true, true, true, true] },
      { feature: "Priority Support", icon: Headphones, values: [false, false, true, true] },
      { feature: "Dedicated Support / Account Manager", icon: ShieldCheck, values: [false, false, false, true] },
      { feature: "Custom Integrations & API", icon: Settings, values: [false, false, false, true] },
      { feature: "Done For You Setup (Add-on)", icon: BriefcaseBusiness, values: ["€299 (one-time)", "€299 (one-time)", "€299 (one-time)", "Included"] },
    ],
  },
];

function CellValue({ value, color }: { value: boolean | string; color: string }) {
  if (typeof value === "boolean") {
    return value ? (
      <CheckCircle2 className={`mx-auto h-4 w-4 ${color}`} strokeWidth={1.8} />
    ) : (
      <X className="mx-auto h-4 w-4 text-slate-500" strokeWidth={1.8} />
    );
  }

  return <span>{value}</span>;
}

function ComparePlans() {
  return (
    <section className="relative isolate overflow-hidden bg-[#010616] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_12%,rgba(37,99,235,0.14),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.12),transparent_32%)]" />

      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Compare{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
              All Plans
            </span>
          </h2>
          <p className="mt-2 text-base text-slate-300">
            Find the perfect plan for your business.
          </p>
        </div>

        <div className="mt-10 rounded-xl border border-blue-300/15 bg-[#020a1c]/75 shadow-[0_0_70px_rgba(37,99,235,0.12)]">
          <div className="overflow-x-auto pt-4">
            <table className="w-full min-w-[980px] border-collapse text-left text-xs text-slate-300">
              <thead>
                <tr>
                  <th className="w-[280px] border-r border-blue-300/15 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-slate-300">
                    Features
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className={`relative min-w-[210px] border-x px-6 py-4 text-center ${plan.border}`}
                    >
                      {plan.badge && (
                        <span className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-[0_0_20px_rgba(99,102,241,0.55)]">
                          {plan.badge}
                        </span>
                      )}
                      <div className={`text-sm font-bold uppercase ${plan.text}`}>
                        {plan.name}
                      </div>
                      <div className="mt-3 flex items-end justify-center gap-1.5">
                        <span className="text-xl font-semibold leading-none text-white">
                          {plan.price}
                        </span>
                        <span className="text-xs font-normal text-slate-300">
                          {plan.note}
                        </span>
                      </div>
                      {plan.subNote && (
                        <p className="mt-1 text-[11px] font-normal text-slate-400">
                          {plan.subNote}
                        </p>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {sections.map((section) => {
                  const SectionIcon = section.icon;

                  return (
                    <Fragment key={section.title}>
                      <tr key={`${section.title}-heading`} className="bg-white/[0.045]">
                        <td
                          colSpan={5}
                          className="border-y border-blue-300/10 px-8 py-2 text-xs font-bold uppercase tracking-wide text-cyan-300"
                        >
                          <span className="inline-flex items-center gap-3">
                            <SectionIcon className="h-4 w-4" strokeWidth={1.8} />
                            {section.title}
                          </span>
                        </td>
                      </tr>

                      {section.rows.map((row) => {
                        const RowIcon = row.icon;

                        return (
                          <tr
                            key={`${section.title}-${row.feature}`}
                            className="border-b border-blue-300/10"
                          >
                            <td className="border-r border-blue-300/15 px-8 py-2">
                              <span className="inline-flex items-center gap-3">
                                <RowIcon
                                  className="h-3.5 w-3.5 text-slate-400"
                                  strokeWidth={1.8}
                                />
                                {row.feature}
                              </span>
                            </td>
                            {row.values.map((value, index) => (
                              <td
                                key={`${row.feature}-${plans[index].name}`}
                                className={`border-x px-5 py-2 text-center text-[11px] leading-4 ${plans[index].border}`}
                              >
                                <CellValue value={value} color={plans[index].text} />
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mx-auto mt-4 flex max-w-3xl items-center justify-center gap-3 text-center text-xs text-slate-400">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-400" />
          <p>
            All plans include core CRM, Calendar, Booking, Invoicing & more.
            Upgrade, downgrade or cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ComparePlans;
