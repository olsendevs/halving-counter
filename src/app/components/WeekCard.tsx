import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function WeekCard({ weeks }: any) {
  return (
    <Card className="w-full text-center mt-10">
      <CardHeader>
        <CardTitle>Weeks to halving</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-9xl font-bold">{weeks}</p>
        <p className="text-[1.2rem] uppercase text-muted-foreground">
          WEEKS
        </p>
      </CardContent>
    </Card>
  );
}
