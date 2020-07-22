import axios from 'axios';
import moxios from 'moxios';
import { expect } from 'chai';
import sinon from 'sinon';

import authMiddleware from 'src/middlewares/authMiddleware';
import { LOG_IN } from 'src/actions/authentification';

describe('middleware for authentification', () => {
  it('should dispatch custom action', () => {
    const clock = sinon.useFakeTimers();
    const fakeStore = { dispatch: sinon.spy() };
    const fakeNext = sinon.spy();
    const fakeAction = {
      type: LOG_IN,
    };

    authMiddleware(fakeStore)(fakeNext)(fakeAction);
    clock.tick(99000);

    expect(fakeStore.dispatch.calledOnce).to.equal(true);
  });
});

/* status: 200,
data: {
  logged: true,
  satisfaction: true,
  user: {
    id: 1,
    email: 'nicole@test.fr',
    firstname: 'Nicole',
    lastname: 'Truc',
    role: ['ROLE_USER'],
    birthday: '1990-01-01',
    city: 'Test',
    avatar: {
      type: 'cat',
      mood: 'sad',
      color: '#F0FF0F',
    },
    token: 'ddqdqzdqzudqhzdkuqhdkqhd',
  },
}, */
