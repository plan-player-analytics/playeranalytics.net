import React from 'react';
import classNames from 'classnames';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="https://github.com/plan-player-analytics/Plan">Github</a>
        </li>
        <li>
          <a href="https://github.com/plan-player-analytics/Plan/wiki">Documentation</a>
        </li>
        <li>
          <a href="https://discord.com/invite/yXKmjzT" target="_blank" rel="noreferrer noopener">Discord Support</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;