import { useContext } from "react";

import { ServersContext } from "../../contexts/ServersContext";

import './style.scss';

import IServer from '../../types/IServer';

function ServersTable() {
  const {
    servers,
    selectedServers,
    setSelectedServers,
    removeServerFromSelectedServers
  } = useContext(ServersContext);

  function handleCheckboxChange(receivedServer: IServer) {
    const haveReceivedServerInServers = selectedServers.some(server => 
      server === receivedServer
    );

    if (haveReceivedServerInServers) {
      removeServerFromSelectedServers(receivedServer);
    } else {
      setSelectedServers([...selectedServers, receivedServer]);
    };
  }

  return (
    <section className="ServersTable">
      <div className="top">
        <h2>Tabela de servidores</h2>
      </div>

      <div className="table-overflow">
        <table>
          <thead>
            <tr>
              <th>Select</th>
              <th>Hostname</th>
              <th>Memória</th>
              <th>vCPUs</th>
              <th>Disco</th>
              <th>IP</th>
            </tr>
          </thead>
          
          <tbody>
            {servers && servers.map(server => {
              const stringId: string = server.id_vm.toString();
              const config = server.configuracao;

              return(
                <tr key={stringId}>
                  <td>
                    <input
                      type="checkbox"
                      name={stringId}
                      id={stringId}
                      onChange={() => handleCheckboxChange(server)}
                    />
                  </td>
                  <td>{server.hostname}</td>
                  <td>{config?.memoryProvisioned} GB</td>
                  <td>{config?.cpuProvisioned} vCPUs</td>
                  <td>{config?.totalDiskGB} GB</td>
                  <td>{server.ip}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ServersTable;