import { type ParentComponent, type ComponentProps, splitProps } from 'solid-js';
import { twMerge } from 'tailwind-merge';

const Table: ParentComponent<ComponentProps<'table'>> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'children']);

  return (
    <div class="w-full overflow-auto">
      <table class={twMerge('w-full text-sm', local.class)} {...rest}>
        {local.children}
      </table>
    </div>
  );
};

const TableHeader: ParentComponent<ComponentProps<'thead'>> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'children']);

  return (
    <thead class={twMerge('[&_tr]:border-b', local.class)} {...rest}>
      {local.children}
    </thead>
  );
};

const TableBody: ParentComponent<ComponentProps<'tbody'>> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'children']);

  return (
    <tbody class={twMerge('[&_tr:last-child]:border-0', local.class)} {...rest}>
      {local.children}
    </tbody>
  );
};

const TableRow: ParentComponent<ComponentProps<'tr'>> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'children']);

  return (
    <tr
      class={twMerge('border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted', local.class)}
      {...rest}
    >
      {local.children}
    </tr>
  );
};

const TableHead: ParentComponent<ComponentProps<'th'>> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'children']);

  return (
    <th class={twMerge('h-10 px-2 text-left align-middle font-medium text-muted-foreground', local.class)} {...rest}>
      {local.children}
    </th>
  );
};

const TableCell: ParentComponent<ComponentProps<'td'>> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'children']);

  return (
    <td class={twMerge('p-2 align-middle', local.class)} {...rest}>
      {local.children}
    </td>
  );
};

export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell };
