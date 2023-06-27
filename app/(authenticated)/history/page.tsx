import {
  Table,
  TableRow,
  TableHeadCell,
  TableCell,
} from '#/ui/components/Table';
import { Status } from '#/ui/components/Status';
import { Avatar } from '#/ui/components/Avatar';
import { tableData } from '#/lib/table';

export default function SettingsPage() {
  const onSubmit = (data: any) => {
    console.log(data);
    // Here you would typically send the data to your server
    // to create a new user account.
  };

  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      {/* user details form */}
      <div className="grid gap-8">
        <h2 className="text-base">Page</h2>

        <Table>
          <thead>
            <TableRow>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Value</TableHeadCell>
              <TableHeadCell>Status</TableHeadCell>
              <TableHeadCell>Owner</TableHeadCell>
              <TableHeadCell>Created</TableHeadCell>
            </TableRow>
          </thead>

          <tbody>
            {tableData.map(
              ({ id, name, value, status, owner, created }, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="flex flex-col justify-center space-y-1">
                      <p className="m-0 text-base">{name}</p>
                      <p className="m-0 text-xs text-gray-400">{id}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="text-base">
                      {value.toLocaleString('en-US', {
                        currency: 'usd',
                        style: 'currency',
                      })}
                    </p>
                  </TableCell>
                  <TableCell>
                    <Status
                      type={
                        (status === 'Completed' && 'success') ||
                        (status === 'In Progress' && 'warning') ||
                        (status === 'Failed' && 'error') ||
                        undefined
                      }
                    >
                      {status}
                    </Status>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar
                        className="bg-red-500 text-white"
                        width={28}
                        height={28}
                      >
                        {owner.name
                          .split(' ')
                          .map((name) => name[0])
                          .join('')}
                      </Avatar>
                      <p className="text-base">{owner.name}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="text-base">
                      {new Date(created).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </TableCell>
                </TableRow>
              ),
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
