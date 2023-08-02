import {
  Table,
  TableRow,
  TableHeadCell,
  TableCell,
} from '#/ui/components/Table';
import { TabHeading, TabLink } from '#/ui/components/TabHeading';
import { Status } from '#/ui/components/Status';
import { Avatar } from '#/ui/components/Avatar';
import { tableData } from '#/lib/table';
import { BanknotesIcon } from '@heroicons/react/24/outline';
import { Badge } from '#/ui/components/Badge';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function Page() {
  return (
    <>
      <TabHeading>
        <TabLink
          href="#history"
          title="Payment History"
          Icon={BanknotesIcon}
          active
        />
      </TabHeading>

      <div className="prose prose-sm dark:prose-invert max-w-none py-8">
        {/* user details form */}

        <Table>
          <thead className="border-gray-200">
            <TableRow>
              <TableHeadCell className="px-8">Loan Details</TableHeadCell>
              <TableHeadCell>Amount</TableHeadCell>
              <TableHeadCell>Remaining</TableHeadCell>
              <TableHeadCell>Method</TableHeadCell>
              <TableHeadCell>Progress</TableHeadCell>
              <TableHeadCell>Time & Date</TableHeadCell>
            </TableRow>
          </thead>

          <tbody>
            {tableData.map(
              ({ id, name, value, status, owner, created }, index) => (
                <TableRow key={index}>
                  <TableCell>
                    {/* Loan details - Loan value, ID & Start Date */}
                    <div className="flex flex-col justify-center">
                      <p className="font-brand m-0 text-xl">
                        {(42000).toLocaleString('en-US', {
                          currency: 'usd',
                          style: 'currency',
                        })}
                      </p>
                      <p className="m-0 text-xs text-gray-600 dark:text-gray-400">
                        {id} • May 2020
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    {/* Transaction value & status */}
                    <div className="flex flex-col items-end">
                      <p className="font-brand m-0 text-xl">
                        {value.toLocaleString('en-US', {
                          currency: 'usd',
                          style: 'currency',
                        })}
                      </p>
                      <Badge
                        type="success"
                        size="sm"
                        as="span"
                        Icon={CheckIcon}
                      >
                        {status}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    {/* Remaining loan value */}
                    <div className="flex flex-col items-end">
                      <p className="font-brand m-0 text-xl">
                        {(32000).toLocaleString('en-US', {
                          currency: 'usd',
                          style: 'currency',
                        })}
                      </p>
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <p className="m-0 text-sm font-semibold text-gray-800 dark:text-gray-200">
                        Credit Card
                      </p>
                      <p className="m-0 text-xs text-gray-600 dark:text-gray-400">
                        Ending 0990
                      </p>
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex gap-3">
                      <p className="m-0 text-sm text-gray-400 dark:text-gray-600">
                        Progress bar
                      </p>
                      <p className="m-0 text-sm text-gray-600 dark:text-gray-400">
                        4 of 18
                      </p>
                    </div>
                  </TableCell>

                  <TableCell>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                      {new Date(created).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                      })}
                    </p>
                  </TableCell>
                </TableRow>
              ),
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
}
