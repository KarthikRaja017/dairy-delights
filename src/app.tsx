import { history } from '@umijs/max';

const loginPath = '/home';

export async function getInitialState(): Promise<void> {
  history.push(loginPath);
}
