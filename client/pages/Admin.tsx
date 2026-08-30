import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  MessageSquare,
  Clock,
  CalendarCheck,
  TrendingUp,
  Globe,
  RefreshCw,
} from "lucide-react";
import type { AdminStats } from "@shared/api";

export default function Admin() {
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/stats");
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      }
    } catch (err) {
      console.error("Failed to fetch stats", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

  const formatDuration = (seconds: number) => {
    if (seconds < 60) return `${seconds}s`;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const formatDate = (ts: number) => {
    return new Date(ts).toLocaleString("en-IE", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container-main py-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold font-display">AI Assistant Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Track conversations, visitors, and engagement
            </p>
          </div>
          <button
            onClick={fetchStats}
            className="btn-secondary text-sm"
          >
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
        </div>

        {loading && !stats ? (
          <div className="text-center py-20 text-muted-foreground">
            <RefreshCw size={24} className="animate-spin mx-auto mb-3" />
            Loading analytics...
          </div>
        ) : stats ? (
          <>
            {/* Stats cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              <StatCard
                icon={<Users size={20} />}
                label="Total Visitors"
                value={stats.totalVisitors}
              />
              <StatCard
                icon={<MessageSquare size={20} />}
                label="Conversations"
                value={stats.totalConversations}
              />
              <StatCard
                icon={<Clock size={20} />}
                label="Avg. Duration"
                value={formatDuration(stats.avgDuration)}
              />
              <StatCard
                icon={<CalendarCheck size={20} />}
                label="Interview Interest"
                value={stats.interviewRequests}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Popular questions */}
              <div className="card-base p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp size={18} className="text-primary" />
                  Popular Questions
                </h3>
                {stats.popularQuestions.length === 0 ? (
                  <p className="text-muted-foreground text-sm">No questions yet</p>
                ) : (
                  <div className="space-y-3">
                    {stats.popularQuestions.map((q, i) => (
                      <div
                        key={i}
                        className="flex items-start justify-between gap-3"
                      >
                        <p className="text-sm text-secondary-text truncate flex-1">
                          {q.question}
                        </p>
                        <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full whitespace-nowrap">
                          {q.count}x
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Recent sessions */}
              <div className="card-base p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <MessageSquare size={18} className="text-primary" />
                  Recent Conversations
                </h3>
                {stats.recentSessions.length === 0 ? (
                  <p className="text-muted-foreground text-sm">No conversations yet</p>
                ) : (
                  <div className="space-y-3 max-h-[350px] overflow-y-auto">
                    {stats.recentSessions.map((s) => (
                      <div
                        key={s.id}
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">
                            {s.recruiterName || "Anonymous Visitor"}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {s.company || "Unknown company"} · {s.messageCount} messages
                          </p>
                        </div>
                        <span className="text-xs text-muted-foreground whitespace-nowrap ml-3">
                          {formatDate(s.lastActivity)}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Visitor countries */}
              <div className="card-base p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Globe size={18} className="text-primary" />
                  Visitors by Region
                </h3>
                <div className="space-y-3">
                  {stats.visitorsByCountry.map((v) => (
                    <div key={v.country} className="flex items-center justify-between">
                      <p className="text-sm text-secondary-text">{v.country}</p>
                      <span className="text-sm font-medium text-primary">{v.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick links */}
              <div className="card-base p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a
                    href="/"
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all text-sm"
                  >
                    <span className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center">
                      <ArrowLeft size={14} className="text-primary" />
                    </span>
                    <div>
                      <p className="font-medium">View Portfolio</p>
                      <p className="text-xs text-muted-foreground">See what recruiters see</p>
                    </div>
                  </a>
                  <a
                    href="mailto:asbel.nascimento123456@gmail.com"
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all text-sm"
                  >
                    <span className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center">
                      <MessageSquare size={14} className="text-primary" />
                    </span>
                    <div>
                      <p className="font-medium">Contact Asbel</p>
                      <p className="text-xs text-muted-foreground">Send an email directly</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-20 text-muted-foreground">
            Failed to load analytics. Please try again.
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) {
  return (
    <div className="card-base p-5">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>
      <p className="text-3xl font-bold font-display text-foreground">{value}</p>
    </div>
  );
}
