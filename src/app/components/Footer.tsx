import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <div className="text-white text-center bottom-0 mt-4 lg:fixed w-full">
      <Separator />
      <h4 className="p-4">
        © 2023{' '}
        <a
          href="https://github.com/olsendevs"
          target="_blank"
        >
          OlsenDevs
        </a>
        . Developed with ♥️ by{' '}
        <a
          href="https://github.com/olsendevs"
          target="_blank"
        >
          OlsenDevs
        </a>
        {'.'} Hold Bitcoin.
      </h4>
    </div>
  );
}
