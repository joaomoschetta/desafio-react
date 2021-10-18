import { useContext } from 'react';

import { ServersContext } from '../../contexts/ServersContext';

import './style.scss';

function SummaryTable() {
  const { selectedServers } = useContext(ServersContext);
  
  // Used this instead of Array.reduce for several typescript issues
  function getTotalOfArray(array: (number | undefined)[]) {
    let totalMemory = 0;
    array.forEach((value = 0) => totalMemory += value);
    return totalMemory;
  }
  
  const memoryArray = selectedServers.map(server => server.configuracao?.memoryProvisioned);
  const cpuArray = selectedServers.map(server => server.configuracao?.cpuProvisioned);
  const diskArray = selectedServers.map(server => server.configuracao?.totalDiskGB);

  const summary = {
    selectedServers: selectedServers.length | 0,
    totalMemory: getTotalOfArray(memoryArray),
    cpuTotal: getTotalOfArray(cpuArray),
    diskTotal: getTotalOfArray(diskArray)
  }

  return (
    <section className="SummaryTable">
      <div className="top">
        <h2>Sumário dos recursos dos servidores</h2>
      </div>

      <div className="table-overflow">
        <table>
          <tr>
            <th>Servidores Selecionados</th>
            <td>{summary.selectedServers} servidores selecionados</td>
          </tr>
          <tr>
            <th>Total de Memória</th>
            <td>{summary.totalMemory} GB</td>
          </tr>
          <tr>
            <th>Total de CPUs</th>
            <td>{summary.cpuTotal} vCPUs</td>
          </tr>
          <tr>
            <th>Total de Discos</th>
            <td>{summary.diskTotal} GB</td>
          </tr>
        </table>
      </div>
    </section>
  )
}

export default SummaryTable;
