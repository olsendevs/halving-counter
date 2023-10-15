'use client';
import { useCallback, useEffect, useState } from 'react';
import BlocksData from './components/BlocksData';
import DayCard from './components/DayCard';
import Footer from './components/Footer';
import MonthCard from './components/MonthCard';
import PorcentageCard from './components/PorcentageCard';
import WeekCard from './components/WeekCard';
import axios from 'axios';
import { mock } from './mock';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  const [block, setBlock] = useState({
    height: '',
    time: '',
    index: '',
    transactions: '',
  });

  const [timeUntilHalving, setTimeUntilHalving] = useState({
    days: '',
    weeks: '',
    months: '',
    completed: '',
  });

  const [isLoading, setIsLoading] = useState(true);

  const calculateTimeUntilHalving = (
    currentBlockHeight: any,
  ) => {
    // Substitua este valor pelo bloco de altura do último halving
    const lastHalvingBlockHeight = 630000;
    const nextHalvingBlockHeight = 840000;
    // Substitua este valor pelo número de blocos em um dia, semana e mês médios
    const blocksPerDay = 144;
    const blocksPerWeek = 1008;
    const blocksPerMonth = 4320;

    // Calcula os dias, semanas e meses restantes até o próximo halving
    const blocksRemaining =
      nextHalvingBlockHeight - currentBlockHeight;

    const daysRemaining = Math.floor(
      blocksRemaining / blocksPerDay,
    );
    const weeksRemaining = Math.floor(
      blocksRemaining / blocksPerWeek,
    );
    const monthsRemaining = Math.floor(
      blocksRemaining / blocksPerMonth,
    );

    // Calcula a porcentagem completa do tempo desse ciclo
    const totalBlocksInCycle = 210000; // Número de blocos por ciclo
    const completedPercentage =
      ((currentBlockHeight - lastHalvingBlockHeight) /
        totalBlocksInCycle) *
      100;

    // Atualiza o estado
    setTimeUntilHalving({
      days: daysRemaining.toString(),
      weeks: weeksRemaining.toString(),
      months: monthsRemaining.toString(),
      completed: completedPercentage.toFixed(2),
    });
  };

  async function getLastBlockData() {
    try {
      const response = await axios.get(
        'https://blockchain.info/rawblock/000000000000000000036e24080ecd19ec4fdca4ae2a4ad233c33a5532b90274?cors=true',
      );

      // const response = mock;

      await setBlock({
        height: response.data.height.toString(),
        time: response.data.time.toString(),
        index: response.data.block_index.toString(),
        transactions: response.data.tx.length.toString(),
      });

      calculateTimeUntilHalving(response.data.height);
    } catch (error) {
      throw new Error(
        'Ocorreu um erro ao obter a altura do bloco atual: ' +
          error,
      );
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getLastBlockData();

    setInterval(async () => {
      await getLastBlockData();
    }, 5000);
  }, []);

  return (
    <main className="min-h-screen mx-auto dark bg-background">
      <h1 className="text-white text-center font-bold pt-16 text-6xl">
        How much time until Bitcoin next halving?
      </h1>
      <h2 className="text-white font-extralight text-center pt-4 text-xl">
        Updated in real time.
      </h2>
      {isLoading ? (
        <div className=" w-full text-center text-white dark items-center p-20">
          loading...
        </div>
      ) : (
        <div>
          <div className="flex-column pl-[5vw] pr-[5vw] dark baseline lg:flex lg:items-center lg:space-x-9 lg:pl-[20vw] lg:pr-[20vw]">
            <DayCard days={timeUntilHalving.days} />
            <WeekCard weeks={timeUntilHalving.weeks} />
            <MonthCard months={timeUntilHalving.months} />
          </div>
          <div className="flex-column pl-[5vw] pr-[5vw] dark baseline lg:flex lg:items-center lg:space-x-9 lg:pl-[20vw] lg:pr-[20vw]">
            <PorcentageCard
              completed={timeUntilHalving.completed}
            />
          </div>
          <BlocksData
            height={block.height}
            time={block.time}
            index={block.index}
            transactions={block.transactions}
          />
        </div>
      )}
      <Footer />
    </main>
  );
}
