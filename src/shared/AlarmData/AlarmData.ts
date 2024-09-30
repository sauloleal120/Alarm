const mockAlarms = [
  {
    id: '1',
    time: '07:00',
    label: 'Acordar',
    repeatDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    active: true,
    sound: 'default',
    vibration: true,
  },
  {
    id: '2',
    time: '08:30',
    label: 'Exercícios',
    repeatDays: ['Saturday', 'Sunday'],
    active: false,
    sound: 'forest',
    vibration: false,
  },
  {
    id: '3',
    time: '14:00',
    label: 'Reunião',
    repeatDays: ['Wednesday'],
    active: true,
    sound: 'office',
    vibration: true,
  },
  {
    id: '4',
    time: '21:30',
    label: 'Meditação',
    repeatDays: ['Monday', 'Thursday'],
    active: false,
    sound: 'calm',
    vibration: true,
  },
  {
    id: '5',
    time: '06:00',
    label: 'Caminhada',
    repeatDays: ['Tuesday', 'Thursday'],
    active: true,
    sound: 'nature',
    vibration: false,
  },
];

export default mockAlarms;
