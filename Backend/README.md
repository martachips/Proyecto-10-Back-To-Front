USERS
· Podrán entrar y registrarse / iniciar sesión
· Podrán crear eventos así como modificarlos
· Podrán modificar su propio perfil y ver a qué eventos asisten y cuáles han creado
· Podrán ver el número de asistentes a un evento
· Y podrán confirmar su asistencia a un evento

EVENTS
· Contendrán tanto los usuarios registrados como asistentes sin registro confirmados

ATTENDANTS
· Sólo podrán ver los eventos y el número total de asistentes y confirmar su asistencia
· Pero no podrán crear ni modificar eventos

ENDPOINTS

Attendants:

- getAttendantsById - /attendants/:id
- getattendants - /attendants/
- confirmAssistance - /event/:eventId/attendance/confirm

Events:

- getEventById - /event/:id
- getEventByCategory - /event/category/:category
- getEvents - /event/
- createEvent - /event/createEvent
- validateEvent - /event/validate/:id
- updateEvent - /event/update/:id
- deleteEvent - /event/:id

Users:

- getUsers - /user/
- getUserById - /user/:id
- register - /user/register
- login - /user/login
- updateUser - /user/:id
- confirmAssistance - /user/event/:eventId/attendance/confirm
- deleteUser - /user/:id
