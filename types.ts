export interface NodeData {
  position: [number, number, number];
  color: [number, number, number];
  size: number;
}

export enum SimulationState {
  IDLE = 'IDLE',
  ACTIVE = 'ACTIVE',
  LOADING = 'LOADING'
}
