/**
 * Spider Simulation Configuration
 *
 * This file lets you customize all controls, keybindings, initial physics settings,
 * visual theme, and interaction behavior for the 3D reactive jumping spider.
 *
 * You can change any keybinding below (e.g. 'w', 'Space', 'Shift', 'ArrowUp', etc.)
 * or adjust movement speed, stride, scale, and initial toggles.
 */

export interface SpiderKeybindings {
  /** Shoot a silk rope toward cursor (Default: 'w') */
  shootWeb: string;
  /** Shoot a taut silk bridge and zipline/rappel across air gap (Default: 'z') */
  zipline: string;
  /** Perform a cute jumping spider hop (Default: 'j') */
  hop: string;
  /** Force stop, crossfade to cute head, and blink twice (Default: 'Space') */
  doubleBlink: string;
  /** Toggle live 2-bone IK skeleton & Verlet web node overlay (Default: 'i') */
  toggleIK: string;
  /** Toggle dynamic cursor desk-lamp spotlight & 3D shadows (Default: 'l') */
  toggleLamp: string;
  /** Toggle ambient breeze & acoustic web string plucking (Default: 'b') */
  toggleBreeze: string;
  /** Clear all spun webs from canvas (Default: 'c') */
  clearWebs: string;
  /** Toggle all HUD telemetry & floating control panels (Default: 'h') */
  toggleHUD: string;
  /** Toggle synthesized Web Audio sound effects (Default: 'm') */
  toggleSound: string;
  /** Toggle bottom-right control panel dock minimize/expand (Default: 'd') */
  toggleDock: string;
  /** Open/close the photo cutout anatomy inspection modal (Default: 'a') */
  toggleAnatomyModal: string;
}

export interface SpiderInitialSettings {
  /**
   * Tracking mode:
   * - 'cursor': Spider follows the mouse/pointer continuously
   * - 'patrol': Spider wanders autonomously across the table
   * - 'prey': Spider hunts flies spawned on click
   * - 'idle': Spider stays stationary and alert
   */
  mode: 'cursor' | 'patrol' | 'prey' | 'idle';

  /** Scurry movement speed multiplier (Range: 0.4 - 2.2, Default: 1.0) */
  speedMult: number;

  /** IK step stride length & arc lift multiplier (Range: 0.6 - 1.6, Default: 1.0) */
  strideMult: number;

  /** Overall spider scale factor (Range: 0.45 - 1.35, Default: 0.78) */
  scale: number;

  /** Tabletop backdrop theme: 'crimson' | 'dark' | 'amber' (Default: 'crimson') */
  theme: 'crimson' | 'dark' | 'amber';

  /** Whether the dynamic cursor desk-lamp spotlight is on initially (Default: true) */
  lampEnabled: boolean;

  /** Whether ambient breeze and string vibration physics are on initially (Default: true) */
  breezeEnabled: boolean;

  /** Whether Web Audio synthesized SFX is active initially (Default: false) */
  soundEnabled: boolean;

  /** Whether the 2-bone IK rig skeleton lines are visible initially (Default: false) */
  showIK: boolean;

  /** Whether the HUD telemetry panels are visible initially (Default: true) */
  hudVisible: boolean;
}

export interface SpiderPhysicsConfig {
  /** Spotlight radius in pixels for desk-lamp lighting (Default: 280) */
  lampRadius: number;
  /** Delay in milliseconds before triggering the welcome double-blink on startup (Default: 450) */
  initialBlinkDelayMs: number;
  /** Number of initial flies spawned when entering 'prey' mode (Default: 2) */
  preySpawnCount: number;
  /** Gravity applied to Verlet silk nodes (Default: 0.28) */
  webGravity: number;
}

export interface SpiderControlsConfig {
  keybindings: SpiderKeybindings;
  initialSettings: SpiderInitialSettings;
  physics: SpiderPhysicsConfig;
}

export const SPIDER_CONFIG: SpiderControlsConfig = {
  // Keybindings: any keyboard character ('w', '1', 'a') or key name ('Space', 'Tab', 'Escape', 'Enter')
  keybindings: {
    shootWeb: 'w',
    zipline: 'z',
    hop: 'j',
    doubleBlink: 'Space',
    toggleIK: 'i',
    toggleLamp: 'l',
    toggleBreeze: 'b',
    clearWebs: 'c',
    toggleHUD: 'h',
    toggleSound: 'm',
    toggleDock: 'd',
    toggleAnatomyModal: 'a',
  },

  // Default slider values and initial features
  initialSettings: {
    mode: 'cursor',
    speedMult: 1.0,
    strideMult: 1.0,
    scale: 0.4,
    theme: 'dark',
    lampEnabled: true,
    breezeEnabled: true,
    soundEnabled: false,
    showIK: false,
    hudVisible: true,
  },

  // Physics and lighting parameters
  physics: {
    lampRadius: 150,
    initialBlinkDelayMs: 450,
    preySpawnCount: 2,
    webGravity: 0.28,
  },
};

export default SPIDER_CONFIG;
