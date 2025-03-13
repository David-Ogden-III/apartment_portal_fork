import { useState, useEffect, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import Card from '../../components/Card';

const PackageCard = () => {
    const [clicks, setClicks] = useState(0);
    const [showSbPackage, setShowSbPackage] = useState(false);

    const hideSbPackage = useCallback(() => {
        setShowSbPackage(false);
        setClicks(0);
    }, []);

    useEffect(() => {
        let timer: number;
        if (clicks === 3) {
            setShowSbPackage(true);

            confetti({
                particleCount: 200,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#004C54', '#A5ACAF'],
            });
            timer = window.setTimeout(hideSbPackage, 3000);
        }

        return () => {
            if (timer) {
                window.clearTimeout(timer);
            }
        };
    }, [clicks, hideSbPackage]);

    return (
        <div>
            <h3 className="text-lg font-medium text-black mb-2">Packages</h3>
            <Card className="bg-white rounded-[20px] p-6">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold">Locker #A12</span>
                    <div className="bg-primary rounded-full p-3">
                        <ArrowRight className="text-white" />
                    </div>
                </div>
                <div className="text-black">
                    <span
                        onClick={() => setClicks(prev => prev + 1)}
                        className='cursor-default select-none'
                    >📦 </span>
                    <span>2 Packages Available</span>
                </div>
            </Card>

            {showSbPackage && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
                    onClick={hideSbPackage}
                >
                    <img
                        src="frontend/src/tenantDashboard/components/dashAssets/asset/__dash__.png"
                        alt="You Found The Hidden Surprise"
                        className="max-w-md w-full rounded-lg shadow-lg p-8 bg-white"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
};

export default PackageCard;