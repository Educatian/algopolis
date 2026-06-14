// ALGOPOLIS is a single-player game; all simulation runs client-side in index.html.
// The platform requires a rules module at the archive root — this is the solo stub.
export const meta = { game: "algopolis", minPlayers: 1, maxPlayers: 1 };
export function setup() { return {}; }
export function validateAction() { return { ok: true }; }
export function applyAction(state) { return state; }
export function isGameOver() { return { over: false }; }
export function viewFor(state) { return state; }
