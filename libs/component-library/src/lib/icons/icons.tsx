import React from 'react';
import { Path } from 'react-native-svg';
import { FxSvg, FxSvgProps } from '../svg/svg';

export const FxChevronDownIcon = (props: FxSvgProps) => (
  <FxSvg width={12} height={7} viewBox="0 0 12 7" {...props}>
    <Path d="M6 5.5L6.35355 5.85355L6 6.20711L5.64645 5.85355L6 5.5ZM11.3536 0.853553L6.35355 5.85355L5.64645 5.14645L10.6464 0.146447L11.3536 0.853553ZM5.64645 5.85355L0.646446 0.853554L1.35355 0.146447L6.35355 5.14645L5.64645 5.85355Z" />
  </FxSvg>
);
export const FxChevronRightIcon = (props: FxSvgProps) => (
  <FxSvg width={16} height={16} viewBox="0 0 16 16" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.11788 2.3131C5.31314 2.11784 5.62973 2.11784 5.82499 2.3131L10.6869 7.17503C11.1425 7.63064 11.1425 8.36934 10.6869 8.82495L5.82499 13.6869C5.62973 13.8821 5.31314 13.8821 5.11788 13.6869C4.92262 13.4916 4.92262 13.175 5.11788 12.9798L9.97981 8.11784C10.0449 8.05275 10.0449 7.94723 9.97981 7.88214L5.11788 3.02021C4.92262 2.82495 4.92262 2.50837 5.11788 2.3131Z"
    />
  </FxSvg>
);

export const FxChevronLeftIcon = (props: FxSvgProps) => (
  <FxSvg width={16} height={16} viewBox="0 0 16 16" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.8821 2.31312C10.6869 2.11786 10.3703 2.11786 10.175 2.31312L5.31308 7.17505C4.85747 7.63066 4.85747 8.36935 5.31308 8.82496L10.175 13.6869C10.3703 13.8822 10.6869 13.8822 10.8821 13.6869C11.0774 13.4916 11.0774 13.175 10.8821 12.9798L6.02019 8.11786C5.9551 8.05277 5.9551 7.94724 6.02019 7.88215L10.8821 3.02023C11.0774 2.82496 11.0774 2.50838 10.8821 2.31312Z"
    />
  </FxSvg>
);

export const FxCloseIcon = (props: FxSvgProps) => (
  <FxSvg width="18" height="18" viewBox="0 0 18 18" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.4697 17.5303C16.7626 17.8232 17.2374 17.8232 17.5303 17.5303C17.8232 17.2374 17.8232 16.7626 17.5303 16.4697L10.0607 9L17.5303 1.53033C17.8232 1.23744 17.8232 0.762564 17.5303 0.469669C17.2374 0.176777 16.7626 0.176777 16.4697 0.469669L9 7.93934L1.53033 0.469669C1.23744 0.176777 0.762564 0.176777 0.469669 0.469669C0.176777 0.762564 0.176777 1.23744 0.469669 1.53033L7.93934 9L0.46967 16.4697C0.176777 16.7626 0.176777 17.2374 0.46967 17.5303C0.762563 17.8232 1.23744 17.8232 1.53033 17.5303L9 10.0607L16.4697 17.5303Z"
    />
  </FxSvg>
);

export const FxDownArrowIcon = (props: FxSvgProps) => (
  <FxSvg width={14} height={9} viewBox="0 0 14 8" {...props}>
    <Path d="M7 7.49585L14 0.495849H0L7 7.49585Z" />
  </FxSvg>
);

export const FxExclamationIcon = (props: FxSvgProps) => (
  <FxSvg width={12} height={12} viewBox="0 0 12 12" {...props}>
    <Path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
    <Path d="M5.25146 8.25C5.25146 8.1515 5.27086 8.05398 5.30856 7.96298C5.34625 7.87199 5.40149 7.78931 5.47113 7.71967C5.54078 7.65002 5.62346 7.59478 5.71445 7.55709C5.80545 7.5194 5.90297 7.5 6.00146 7.5C6.09996 7.5 6.19748 7.5194 6.28848 7.55709C6.37947 7.59478 6.46215 7.65002 6.53179 7.71967C6.60144 7.78931 6.65668 7.87199 6.69437 7.96298C6.73207 8.05398 6.75146 8.1515 6.75146 8.25C6.75146 8.44891 6.67245 8.63967 6.53179 8.78033C6.39114 8.92098 6.20038 9 6.00146 9C5.80255 9 5.61179 8.92098 5.47113 8.78033C5.33048 8.63967 5.25146 8.44891 5.25146 8.25ZM5.32496 3.74625C5.31498 3.65163 5.32499 3.55597 5.35437 3.46547C5.38374 3.37497 5.43181 3.29166 5.49545 3.22094C5.5591 3.15022 5.63691 3.09367 5.72382 3.05496C5.81074 3.01625 5.90482 2.99625 5.99996 2.99625C6.09511 2.99625 6.18919 3.01625 6.27611 3.05496C6.36302 3.09367 6.44083 3.15022 6.50448 3.22094C6.56812 3.29166 6.61619 3.37497 6.64556 3.46547C6.67494 3.55597 6.68495 3.65163 6.67496 3.74625L6.41247 6.3765C6.40365 6.47983 6.35637 6.57608 6.27998 6.64622C6.2036 6.71637 6.10367 6.75529 5.99996 6.75529C5.89626 6.75529 5.79633 6.71637 5.71995 6.64622C5.64356 6.57608 5.59628 6.47983 5.58746 6.3765L5.32496 3.74625Z" />
  </FxSvg>
);

export const FxFilterIcon = (props: FxSvgProps) => (
  <FxSvg width={16} height={16} viewBox="0 0 16 16" {...props}>
    <Path d="M9.25 15.5H6.75C6.41848 15.5 6.10054 15.3683 5.86612 15.1339C5.6317 14.8995 5.5 14.5815 5.5 14.25V9.50625L0.86875 4.875C0.634008 4.64166 0.501395 4.32474 0.5 3.99375V1.75C0.5 1.41848 0.631696 1.10054 0.866116 0.866116C1.10054 0.631696 1.41848 0.5 1.75 0.5H14.25C14.5815 0.5 14.8995 0.631696 15.1339 0.866116C15.3683 1.10054 15.5 1.41848 15.5 1.75V3.99375C15.4986 4.32474 15.366 4.64166 15.1313 4.875L10.5 9.50625V14.25C10.5 14.5815 10.3683 14.8995 10.1339 15.1339C9.89946 15.3683 9.58152 15.5 9.25 15.5ZM1.75 1.75V3.99375L6.75 8.99375V14.25H9.25V8.99375L14.25 3.99375V1.75H1.75Z" />
  </FxSvg>
);

export const FxLoadingSpinnerIcon = (props: FxSvgProps) => (
  <FxSvg width={16} height={16} viewBox="0 0 16 16" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.83045 1.8351C7.86006 2.10965 7.6615 2.35622 7.38695 2.38583C4.5568 2.69107 2.35303 5.08851 2.35303 7.99999C2.35303 10.9115 4.5568 13.3089 7.38695 13.6141C7.6615 13.6438 7.86006 13.8903 7.83045 14.1649C7.80084 14.4394 7.55427 14.638 7.27972 14.6084C3.94724 14.249 1.35303 11.4278 1.35303 7.99999C1.35303 4.57221 3.94724 1.75102 7.27972 1.3916C7.55427 1.36199 7.80084 1.56055 7.83045 1.8351Z"
    />
  </FxSvg>
);

export const FxCheckIcon = (props: FxSvgProps) => (
  <FxSvg width={20} height={20} viewBox="0 0 20 20" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 0C4.47727 0 0 4.47727 0 10C0 15.5227 4.47727 20 10 20C15.5227 20 20 15.5227 20 10C20 4.47727 15.5227 0 10 0ZM14.3345 8.30909C14.4144 8.21786 14.4751 8.11158 14.5133 7.99652C14.5514 7.88145 14.5661 7.75992 14.5566 7.63908C14.5471 7.51823 14.5135 7.40051 14.4578 7.29284C14.4021 7.18518 14.3254 7.08973 14.2323 7.01213C14.1392 6.93453 14.0315 6.87633 13.9155 6.84097C13.7996 6.8056 13.6777 6.79378 13.5572 6.80621C13.4366 6.81863 13.3197 6.85504 13.2134 6.9133C13.1071 6.97156 13.0135 7.0505 12.9382 7.14545L9.02909 11.8355L7.00636 9.81182C6.83491 9.64622 6.60527 9.55459 6.36691 9.55666C6.12855 9.55873 5.90054 9.65434 5.73198 9.82289C5.56343 9.99145 5.46782 10.2195 5.46575 10.4578C5.46368 10.6962 5.55531 10.9258 5.72091 11.0973L8.44818 13.8245C8.53751 13.9138 8.64445 13.9835 8.7622 14.0291C8.87994 14.0748 9.00591 14.0954 9.13206 14.0897C9.25822 14.084 9.3818 14.052 9.49492 13.9959C9.60804 13.9397 9.70823 13.8606 9.78909 13.7636L14.3345 8.30909Z"
    />
  </FxSvg>
);

export const FxEditIcon = (props: FxSvgProps) => (
  <FxSvg width={20} height={20} viewBox="0 0 20 20" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM13.6594 9.17088L7.70084 15.1295C7.61877 15.2115 7.51553 15.2699 7.40269 15.2981L4.04156 15.9585L4.70199 12.5968C4.73032 12.4842 4.78859 12.3814 4.87062 12.2992L10.8292 6.34066L13.6594 9.17088ZM15.9585 6.34066C15.9585 6.6807 15.8234 7.00682 15.583 7.2473L14.5661 8.26423L11.7359 5.43402L12.7528 4.41709C12.9933 4.17668 13.3194 4.04163 13.6594 4.04163C13.9995 4.04163 14.3256 4.17668 14.5661 4.41709L15.583 5.43402C15.8234 5.6745 15.9585 6.00062 15.9585 6.34066Z"
    />
  </FxSvg>
);
export const FxSuccessIcon = (props: FxSvgProps) => (
  <FxSvg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.47727 2 2 6.47727 2 12C2 17.5227 6.47727 22 12 22C17.5227 22 22 17.5227 22 12C22 6.47727 17.5227 2 12 2ZM16.3345 10.3091C16.4144 10.2179 16.4751 10.1116 16.5133 9.99652C16.5514 9.88145 16.5661 9.75992 16.5566 9.63908C16.5471 9.51823 16.5135 9.40051 16.4578 9.29284C16.4021 9.18517 16.3254 9.08973 16.2323 9.01213C16.1392 8.93453 16.0315 8.87633 15.9155 8.84097C15.7996 8.8056 15.6777 8.79378 15.5572 8.80621C15.4366 8.81863 15.3197 8.85504 15.2134 8.9133C15.1071 8.97156 15.0135 9.0505 14.9382 9.14545L11.0291 13.8355L9.00636 11.8118C8.83491 11.6462 8.60527 11.5546 8.36691 11.5567C8.12855 11.5587 7.90054 11.6543 7.73198 11.8229C7.56343 11.9914 7.46782 12.2195 7.46575 12.4578C7.46368 12.6962 7.55531 12.9258 7.72091 13.0973L10.4482 15.8245C10.5375 15.9138 10.6445 15.9835 10.7622 16.0291C10.8799 16.0748 11.0059 16.0954 11.1321 16.0897C11.2582 16.084 11.3818 16.052 11.4949 15.9959C11.608 15.9397 11.7082 15.8606 11.7891 15.7636L16.3345 10.3091Z"
    />
  </FxSvg>
);

export const FxInfoIcon = (props: FxSvgProps) => (
  <FxSvg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.47727 2 2 6.47727 2 12C2 17.5227 6.47727 22 12 22C17.5227 22 22 17.5227 22 12C22 6.47727 17.5227 2 12 2ZM11.5455 6.54545C11.3043 6.54545 11.0731 6.64123 10.9026 6.81172C10.7321 6.98221 10.6364 7.21344 10.6364 7.45455C10.6364 7.69565 10.7321 7.92688 10.9026 8.09737C11.0731 8.26786 11.3043 8.36364 11.5455 8.36364H12C12.2411 8.36364 12.4723 8.26786 12.6428 8.09737C12.8133 7.92688 12.9091 7.69565 12.9091 7.45455C12.9091 7.21344 12.8133 6.98221 12.6428 6.81172C12.4723 6.64123 12.2411 6.54545 12 6.54545H11.5455ZM10.1818 10.1818C9.94071 10.1818 9.70948 10.2776 9.53899 10.4481C9.36851 10.6186 9.27273 10.8498 9.27273 11.0909C9.27273 11.332 9.36851 11.5632 9.53899 11.7337C9.70948 11.9042 9.94071 12 10.1818 12H11.0909V14.7273H10.1818C9.94071 14.7273 9.70948 14.8231 9.53899 14.9935C9.36851 15.164 9.27273 15.3953 9.27273 15.6364C9.27273 15.8775 9.36851 16.1087 9.53899 16.2792C9.70948 16.4497 9.94071 16.5455 10.1818 16.5455H13.8182C14.0593 16.5455 14.2905 16.4497 14.461 16.2792C14.6315 16.1087 14.7273 15.8775 14.7273 15.6364C14.7273 15.3953 14.6315 15.164 14.461 14.9935C14.2905 14.8231 14.0593 14.7273 13.8182 14.7273H12.9091V11.0909C12.9091 10.8498 12.8133 10.6186 12.6428 10.4481C12.4723 10.2776 12.2411 10.1818 12 10.1818H10.1818Z"
    />
  </FxSvg>
);

export const FxWarningIcon = (props: FxSvgProps) => (
  <FxSvg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.47727 2 2 6.47727 2 12C2 17.5227 6.47727 22 12 22C17.5227 22 22 17.5227 22 12C22 6.47727 17.5227 2 12 2ZM12.9091 7.45455C12.9091 7.21344 12.8133 6.98221 12.6428 6.81172C12.4723 6.64123 12.2411 6.54545 12 6.54545C11.7589 6.54545 11.5277 6.64123 11.3572 6.81172C11.1867 6.98221 11.0909 7.21344 11.0909 7.45455V12.9091C11.0909 13.1502 11.1867 13.3814 11.3572 13.5519C11.5277 13.7224 11.7589 13.8182 12 13.8182C12.2411 13.8182 12.4723 13.7224 12.6428 13.5519C12.8133 13.3814 12.9091 13.1502 12.9091 12.9091V7.45455ZM12.9091 16.0909C12.9091 15.8498 12.8133 15.6186 12.6428 15.4481C12.4723 15.2776 12.2411 15.1818 12 15.1818C11.7589 15.1818 11.5277 15.2776 11.3572 15.4481C11.1867 15.6186 11.0909 15.8498 11.0909 16.0909V16.5455C11.0909 16.7866 11.1867 17.0178 11.3572 17.1883C11.5277 17.3588 11.7589 17.4545 12 17.4545C12.2411 17.4545 12.4723 17.3588 12.6428 17.1883C12.8133 17.0178 12.9091 16.7866 12.9091 16.5455V16.0909Z"
    />
  </FxSvg>
);

export const FxErrorIcon = (props: FxSvgProps) => (
  <FxSvg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.47727 2 2 6.47727 2 12C2 17.5227 6.47727 22 12 22C17.5227 22 22 17.5227 22 12C22 6.47727 17.5227 2 12 2ZM15.37 9.91545C15.5356 9.744 15.6272 9.51436 15.6252 9.276C15.6231 9.03764 15.5275 8.80963 15.3589 8.64107C15.1904 8.47252 14.9624 8.37691 14.724 8.37484C14.4856 8.37277 14.256 8.4644 14.0845 8.63L12 10.7145L9.91545 8.63C9.83159 8.54317 9.73128 8.47392 9.62037 8.42627C9.50946 8.37863 9.39016 8.35355 9.26946 8.3525C9.14875 8.35145 9.02904 8.37445 8.91731 8.42016C8.80559 8.46587 8.70409 8.53338 8.61873 8.61873C8.53338 8.70409 8.46587 8.80559 8.42016 8.91731C8.37445 9.02904 8.35145 9.14875 8.3525 9.26946C8.35355 9.39016 8.37863 9.50946 8.42627 9.62037C8.47392 9.73128 8.54317 9.83159 8.63 9.91545L10.7145 12L8.63 14.0845C8.54317 14.1684 8.47392 14.2687 8.42627 14.3796C8.37863 14.4905 8.35355 14.6098 8.3525 14.7305C8.35145 14.8513 8.37445 14.971 8.42016 15.0827C8.46587 15.1944 8.53338 15.2959 8.61873 15.3813C8.70409 15.4666 8.80559 15.5341 8.91731 15.5798C9.02904 15.6255 9.14875 15.6486 9.26946 15.6475C9.39016 15.6465 9.50946 15.6214 9.62037 15.5737C9.73128 15.5261 9.83159 15.4568 9.91545 15.37L12 13.2855L14.0845 15.37C14.256 15.5356 14.4856 15.6272 14.724 15.6252C14.9624 15.6231 15.1904 15.5275 15.3589 15.3589C15.5275 15.1904 15.6231 14.9624 15.6252 14.724C15.6272 14.4856 15.5356 14.256 15.37 14.0845L13.2855 12L15.37 9.91545Z"
    />
  </FxSvg>
);
