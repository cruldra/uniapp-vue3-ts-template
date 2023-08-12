import { request } from '@/utils/http';

import { ILogin, ILoginParams } from '@/api/models/login';

export const getCars = () =>
  request.post<any>(
    '/car/list',
    {},
    {
      custom: { auth: false },
    },
  );
