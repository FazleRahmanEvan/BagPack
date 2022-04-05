import React from 'react';
import BarCharts from '../Charts/BarCharts';
import DataComposedChart from '../Charts/DataComposedChart';
import LineCharts from '../Charts/LineCharts';
import PieCharts from '../Charts/PieCharts';

const DashBoard = () => {
    return (
        <div className="container mx-auto  md:grid-cols-2 justify-items-center">
        <h1 className="text-4xl text-center mb-10 mt-10">Dashboard</h1>
        <div className='flex flex-wrap space-x-10 px-8 m-8'>
            <LineCharts/>
            <PieCharts/>
            <BarCharts/>
            <DataComposedChart/>
        </div>
    </div>
    );
};

export default DashBoard;