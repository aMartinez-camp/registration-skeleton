import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  public householdMembers: Array<any> = [
    {
      name: 'Alex Martinez',
      campcredit: 10,
      newcampcredit: 0
    },
    {
      name: 'Luke Frauhiger',
      campcredit: 0,
      newcampcredit: 0
    },
    {
      name: 'Alan Henson',
      campcredit: 0,
      newcampcredit: 0
    },
    {
      name: 'Tim Boff',
      campcredit: 0,
      newcampcredit: 0
    },
    {
      name: 'Jerry Smith',
      campcredit: 0,
      newcampcredit: 0
    },
    {
      name: 'Leah Clements',
      campcredit: 0,
      newcampcredit: 0
    },
    {
      name: 'Joe Roberts',
      campcredit: 0,
      newcampcredit: 0
    },
    {
      name: 'Brian Weldon',
      campcredit: 0,
      newcampcredit: 0
    },
    {
      name: 'Jeff Ward',
      campcredit: 0,
      newcampcredit: 0
    }
  ];

  public ownedOpportunities: Array<any> = [
    {
      name: 'Event #1',
      balance: 50
    },
    {
      name: 'Event #2',
      balance: 100
    },
    {
      name: 'Event #3',
      balance: 150
    }
  ];

  public openOpportunities: Array<any> = [
    {
      name: 'Event #4',
      price: 50
    },
    {
      name: 'Event #5',
      price: 100
    },
    {
      name: 'Event #6',
      price: 150
    }
  ];

  constructor() { }

}
