import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function PorcentageCard({ completed }: any) {
  return (
    <Card className="w-full text-center mt-12">
      <CardHeader>
        <CardTitle> {completed}% Completed</CardTitle>
        <CardDescription>
          BITCOIN HALVING CYCLE 4 - 210,000 BLOCKS
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <div className="w-full text-center">
          <Progress value={completed} />
        </div>
      </CardContent>
      <CardFooter>
        <div className="text-[0.7rem] font-thin w-full text-center">
          NEXT BITCOIN HALVING AT BLOCK 840,000
        </div>
      </CardFooter>
    </Card>
  );
}
