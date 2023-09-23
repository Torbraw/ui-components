import { type ParentComponent, type ComponentProps, splitProps } from 'solid-js';

export const DeleteIcon: ParentComponent<ComponentProps<'svg'>> = (props) => {
  const [local, rest] = splitProps(props, ['class']);

  return (
    <svg class={local.class} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path
        d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  );
};

export const EditIcon: ParentComponent<ComponentProps<'svg'>> = (props) => {
  const [local, rest] = splitProps(props, ['class']);

  return (
    <svg class={local.class} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M15.7279 9.57629L14.3137 8.16207L5 17.4758V18.89H6.41421L15.7279 9.57629ZM17.1421 8.16207L18.5563 6.74786L17.1421 5.33365L15.7279 6.74786L17.1421 8.16207ZM7.24264 20.89H3V16.6474L16.435 3.21233C16.8256 2.8218 17.4587 2.8218 17.8492 3.21233L20.6777 6.04075C21.0682 6.43128 21.0682 7.06444 20.6777 7.45497L7.24264 20.89Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  );
};

export const ArrowDownIcon: ParentComponent<ComponentProps<'svg'>> = (props) => {
  const [local, rest] = splitProps(props, ['class']);

  return (
    <svg class={local.class} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  );
};

export const ArrowUpIcon: ParentComponent<ComponentProps<'svg'>> = (props) => {
  const [local, rest] = splitProps(props, ['class']);

  return (
    <svg class={local.class} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  );
};

export const CaretSortIcon: ParentComponent<ComponentProps<'svg'>> = (props) => {
  const [local, rest] = splitProps(props, ['class']);

  return (
    <svg class={local.class} {...rest} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  );
};

export const PrintIcon: ParentComponent<ComponentProps<'svg'>> = (props) => {
  const [local, rest] = splitProps(props, ['class']);

  return (
    <svg class={local.class} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M17 2C17.5523 2 18 2.44772 18 3V7H21C21.5523 7 22 7.44772 22 8V18C22 18.5523 21.5523 19 21 19H18V21C18 21.5523 17.5523 22 17 22H7C6.44772 22 6 21.5523 6 21V19H3C2.44772 19 2 18.5523 2 18V8C2 7.44772 2.44772 7 3 7H6V3C6 2.44772 6.44772 2 7 2H17ZM16 17H8V20H16V17ZM20 9H4V17H6V16C6 15.4477 6.44772 15 7 15H17C17.5523 15 18 15.4477 18 16V17H20V9ZM8 10V12H5V10H8ZM16 4H8V7H16V4Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  );
};

export const CheckIcon: ParentComponent<ComponentProps<'svg'>> = (props) => {
  const [local, rest] = splitProps(props, ['class']);

  return (
    <svg class={local.class} {...rest} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  );
};

export const SearchIcon: ParentComponent<ComponentProps<'svg'>> = (props) => {
  const [local, rest] = splitProps(props, ['class']);

  return (
    <svg class={local.class} {...rest} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  );
};

export const CloseIcon: ParentComponent<ComponentProps<'svg'>> = (props) => {
  const [local, rest] = splitProps(props, ['class']);

  return (
    <svg class={local.class} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" fill="none">
      <path
        d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  );
};

export const GoogleIcon: ParentComponent<ComponentProps<'svg'>> = (props) => {
  const [local, rest] = splitProps(props, ['class']);

  return (
    <svg class={local.class} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
      <path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      />
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      />
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      />
    </svg>
  );
};

export const MicrosoftIcon: ParentComponent<ComponentProps<'svg'>> = (props) => {
  const [local, rest] = splitProps(props, ['class']);

  return (
    <svg class={local.class} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
      <path fill="#ff5722" d="M6 6H22V22H6z" transform="rotate(-180 14 14)" />
      <path fill="#4caf50" d="M26 6H42V22H26z" transform="rotate(-180 34 14)" />
      <path fill="#ffc107" d="M26 26H42V42H26z" transform="rotate(-180 34 34)" />
      <path fill="#03a9f4" d="M6 26H22V42H6z" transform="rotate(-180 14 34)" />
    </svg>
  );
};

export const ListIcon: ParentComponent<ComponentProps<'svg'>> = (props) => {
  const [local, rest] = splitProps(props, ['class']);

  return (
    <svg class={local.class} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"
      />
    </svg>
  );
};

export const GroupIcon: ParentComponent<ComponentProps<'svg'>> = (props) => {
  const [local, rest] = splitProps(props, ['class']);

  return (
    <svg class={local.class} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"
      />
    </svg>
  );
};

export const PriceTagIcon: ParentComponent<ComponentProps<'svg'>> = (props) => {
  const [local, rest] = splitProps(props, ['class']);

  return (
    <svg class={local.class} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.9042 2.1001L20.8037 3.51431L22.2179 13.4138L13.0255 22.6062C12.635 22.9967 12.0019 22.9967 11.6113 22.6062L1.71184 12.7067C1.32131 12.3162 1.32131 11.683 1.71184 11.2925L10.9042 2.1001ZM11.6113 4.22142L3.83316 11.9996L12.3184 20.4849L20.0966 12.7067L19.036 5.28208L11.6113 4.22142ZM13.7327 10.5854C12.9516 9.80433 12.9516 8.538 13.7327 7.75695C14.5137 6.9759 15.78 6.9759 16.5611 7.75695C17.3421 8.538 17.3421 9.80433 16.5611 10.5854C15.78 11.3664 14.5137 11.3664 13.7327 10.5854Z"
      />
    </svg>
  );
};

export const OpenArmIcon: ParentComponent<ComponentProps<'svg'>> = (props) => {
  const [local, rest] = splitProps(props, ['class']);

  return (
    <svg class={local.class} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.0014 17V22H16.0014V17C16.0014 12.5487 18.6454 8.71498 22.4485 6.98352L23.2763 8.8047C20.1646 10.2213 18.0014 13.3581 18.0014 17ZM8.00143 17V22H6.00143V17C6.00143 13.3581 3.8382 10.2213 0.726562 8.8047L1.55437 6.98352C5.35749 8.71498 8.00143 12.5487 8.00143 17ZM12.0014 12C9.24 12 7.00143 9.76142 7.00143 7C7.00143 4.23858 9.24 2 12.0014 2C14.7628 2 17.0014 4.23858 17.0014 7C17.0014 9.76142 14.7628 12 12.0014 12ZM12.0014 10C13.6583 10 15.0014 8.65685 15.0014 7C15.0014 5.34315 13.6583 4 12.0014 4C10.3446 4 9.00142 5.34315 9.00142 7C9.00142 8.65685 10.3446 10 12.0014 10Z"
      ></path>
    </svg>
  );
};

export const DoorOpenIcon: ParentComponent<ComponentProps<'svg'>> = (props) => {
  const [local, rest] = splitProps(props, ['class']);

  return (
    <svg class={local.class} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.99805 21.0003V19.0003L3.99805 19.0001V4.83489C3.99805 4.35161 4.34367 3.93748 4.81916 3.85102L14.2907 2.12892C14.6167 2.06965 14.9291 2.28589 14.9884 2.61191C14.9948 2.64733 14.998 2.68325 14.998 2.71924V4.00014L18.998 4.00032C19.5503 4.00032 19.998 4.44803 19.998 5.00032V19.0001L21.998 19.0003V21.0003H17.998V6.00032L14.998 6.00014V21.0003H1.99805ZM12.998 4.39674L5.99805 5.66947V19.0003H12.998V4.39674ZM11.998 11.0003V13.0003H9.99805V11.0003H11.998Z"
      ></path>
    </svg>
  );
};
