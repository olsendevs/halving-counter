import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function BlocksData({
  height,
  time,
  index,
  transactions,
}: any) {
  return (
    <div className="flex-column pl-[5vw] pr-[5vw] dark baseline lg:flex lg:items-center lg:space-x-9 lg:pl-[20vw] lg:pr-[20vw]">
      <Card className="w-full text-center mt-12">
        <CardHeader>
          <CardTitle className="text-4xl">
            {height}
          </CardTitle>
          <CardDescription>
            Current Block Height
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="w-full text-center mt-12">
        <CardHeader>
          <CardTitle className="text-4xl">{time}</CardTitle>
          <CardDescription>Block Time</CardDescription>
        </CardHeader>
      </Card>
      <Card className="w-full text-center mt-12">
        <CardHeader>
          <CardTitle className="text-4xl">
            {index}
          </CardTitle>
          <CardDescription>
            Last Block Index
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="w-full text-center mt-12">
        <CardHeader>
          <CardTitle className="text-4xl">
            {transactions}
          </CardTitle>
          <CardDescription>
            Last Block Total Transactions
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
