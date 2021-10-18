import { ServersContextProvider } from '../../contexts/ServersContext';
import DefaultLayout from '../../components/DefaultLayout';
import ServersTable from '../../components/ServersTable';
import SummaryTable from '../../components/SummaryTable';

import './style.scss';

function Home() {
  return (
    <DefaultLayout>
        <main>
          <ServersContextProvider>
            <SummaryTable />
            <ServersTable />
          </ServersContextProvider>
        </main>
    </DefaultLayout>
  );
}

export default Home;
