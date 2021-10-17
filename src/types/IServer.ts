interface Uor {
  uor?: number;
  nome_reduzido?: string;
}

interface So {
  full: string;
  name: string;
  major: any;
  minor: any;
  status: string;
  release: any;
}

interface Configuracao {
  ip?: string;
  so?: Partial<So>;
  folder?: string;
  puppet?: boolean;
  uptime?: number;
  cluster?: string;
  hostname?: string;
  cpuHotAdd?: number;
  hwVersion?: string;
  datacenter?: string;
  powerState?: string;
  so_release?: string;
  totalDiskGB: number;
  conformidade?: any[];
  memoryHotAdd?: number;
  toolsVersion?: string;
  virtualizador?: string;
  cpuProvisioned: number;
  memoryProvisioned: number;
  pacotes_vulneraveis?: any[];
  qtd_vulnerabilidades?: number;
}

export default interface IServer {
  id_vm?: number;
  tags?: any[];
  tag_list?: string;
  locks?: any[];
  ip: string;
  uor_responsavel?: number;
  agendamentos?: any;
  uor: Partial<Uor>;
  ic?: any;
  statusIc?: any;
  hostname: string;
  id_virtualizador?: number;
  configuracao?: Configuracao;
}
