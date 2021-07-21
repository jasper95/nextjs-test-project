import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import NextLink, { LinkProps } from 'next/link';
import MuiLink, { LinkProps as MuiLinkProps } from '@material-ui/core/Link';

const NextComposed = React.forwardRef<HTMLAnchorElement, React.PropsWithChildren<CustomLinkProps>>(
  function NextComposed(props, ref) {
    const { as, href, ...other } = props;

    return (
      <NextLink href={href} as={as}>
        <a ref={ref} {...other} />
      </NextLink>
    );
  },
);

type CustomLinkProps = LinkProps &
  Omit<MuiLinkProps, 'href'> & {
    activeClassName?: string;
    naked?: boolean;
  };

function Link(props: CustomLinkProps) {
  const { href, activeClassName = 'active', className: classNameProps, innerRef, naked, ...other } = props;

  const router = useRouter();
  const pathname = typeof href === 'string' ? href : href?.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  });

  if (naked) {
    return <NextComposed className={className} ref={innerRef} href={href} {...other} />;
  }

  return (
    <MuiLink
      component={NextComposed}
      className={className}
      ref={innerRef}
      href={href as LinkProps['href'] & MuiLinkProps['href']}
      {...other}
    />
  );
}

export default React.forwardRef<HTMLAnchorElement, React.PropsWithChildren<CustomLinkProps>>(function NextMuiLink(
  props,
  ref,
) {
  return <Link {...props} innerRef={ref} />;
});
