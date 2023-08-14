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
import { Badge, BadgeProps } from '#/ui/components/Badge';
import { CheckIcon } from '@heroicons/react/24/outline';
import { getPaymentHistory } from '#/app/api/payments/getPaymentHistory';
import { HistoryDoc } from '#/app/api/payments/history';
import { Slider } from '#/ui/components/Slider';

export default async function Page() {
  const history = await getPaymentHistory();

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
          <thead className="border-gray-200 dark:border-gray-600">
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
            {history.docs.map(
              (
                {
                  id,
                  totalAmount,
                  amountRemaining,
                  amount,
                  status,
                  paymentMethod,
                  owner,
                  created,
                }: HistoryDoc,
                index,
              ) => (
                <TableRow key={index}>
                  <TableCell>
                    {/* Loan details - Loan value, ID & Start Date */}
                    <div className="flex flex-col justify-center">
                      <p className="font-brand m-0 text-xl">
                        {totalAmount.toLocaleString('en-US', {
                          currency: 'usd',
                          style: 'currency',
                        })}
                      </p>
                      <p className="m-0 text-xs text-gray-600 dark:text-gray-400">
                        {id} •{' '}
                        {new Date(created).toLocaleDateString('en-US', {
                          month: 'long',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    {/* Transaction value & status */}
                    <div className="flex flex-col items-end">
                      <p className="font-brand m-0 text-xl">
                        {amount.toLocaleString('en-US', {
                          currency: 'usd',
                          style: 'currency',
                        })}
                      </p>
                      <Badge
                        type={
                          {
                            canceled: 'error',
                            processing: 'info',
                            requires_action: 'warning',
                            requires_capture: 'warning',
                            requires_confirmation: 'warning',
                            requires_payment_method: 'warning',
                            succeeded: 'success',
                          }[status] as BadgeProps['type']
                        }
                        size="sm"
                        as="span"
                        Icon={CheckIcon}
                      >
                        {
                          {
                            canceled: 'cancelled',
                            processing: 'processing',
                            requires_action: 'needs action',
                            requires_capture: 'needs action',
                            requires_confirmation: 'needs action',
                            requires_payment_method: 'needs action',
                            succeeded: 'paid',
                          }[status]
                        }
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    {/* Remaining loan value */}
                    <div className="flex flex-col items-end">
                      <p className="font-brand m-0 text-xl">
                        {amountRemaining.toLocaleString('en-US', {
                          currency: 'usd',
                          style: 'currency',
                        })}
                      </p>
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <p className="m-0 text-sm font-semibold capitalize text-gray-800 dark:text-gray-200">
                        {paymentMethod.paymentMethodInfo.brand}{' '}
                        {paymentMethod.type === 'debit' ? 'Debit' : ''}
                      </p>
                      <p className="m-0 text-xs text-gray-600 dark:text-gray-400">
                        Ending in {paymentMethod.paymentMethodInfo.last4}
                      </p>
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex flex-wrap items-center gap-x-3">
                      <Slider
                        progress={
                          ((totalAmount - amountRemaining) / totalAmount) * 100
                        }
                        className="w-32"
                      />
                      <p className="m-0 text-sm text-gray-600 dark:text-gray-400">
                        {Math.ceil((totalAmount - amountRemaining) / amount)} of{' '}
                        {Math.ceil(totalAmount / amount)}
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
