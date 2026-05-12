import { useState } from "react";
import { Outlet } from "react-router";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { RightPanel } from "./RightPanel";
import { FloatingCreateButton } from "./FloatingCreateButton";
import { MobileHeader } from "./MobileNav";
import { ParticleBackground } from "./ParticleBackground";
import { CreateThreadModal } from "./CreateThreadModal";
import { CursorGlow } from "./CursorGlow";

export function MainLayout() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Cursor Glow Effect */}
      <CursorGlow />

      {/* Ambient Particle Background */}
      <ParticleBackground />

      {/* Create Thread Modal */}
      <CreateThreadModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />

      {/* Left Sidebar - Desktop Only */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Mobile Header */}
        <MobileHeader />

        {/* Top Bar - Desktop Only */}
        <div className="hidden md:block">
          <TopBar onCreateClick={() => setIsCreateModalOpen(true)} />
        </div>

        {/* Page Content Area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Center Content - Outlet renders the current route */}
          <div className="flex-1 overflow-hidden">
            <Outlet context={{ openCreateModal: () => setIsCreateModalOpen(true) }} />
          </div>

          {/* Right Panel - Desktop Only */}
          <div className="hidden lg:block">
            <RightPanel />
          </div>
        </div>
      </div>

      {/* Floating Create Button */}
      <FloatingCreateButton onClick={() => setIsCreateModalOpen(true)} />
    </div>
  );
}
