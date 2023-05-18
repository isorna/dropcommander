---
title: 'Disparo'
excerpt: 'Una vez un grupo de naves finaliza su movimiento, todas sus naves pueden disparar sistemas de armas si las órdenes impartidas a las mismas lo permiten.'
position: 6
---

# {{ $frontmatter.title }}

Una vez un grupo de naves finaliza su movimiento, todas sus naves pueden disparar sistemas de armas si las órdenes impartidas a las mismas lo permiten.

## Procedimiento de Disparo

1. Comprobar Rango de detección y arco de fuego.
1. Generar y distribuir dados de ataque.
1. Tirar para impactar.
1. Determinar daño de Casco total infligido.
1. Realizar tiradas de salvación y reducir puntos de Casco de la nave defensora.
1. Realizar tiradas de Daño incapacitante si los puntos de Casco se reducen al 50% o menos.
1. Realizar tiradas de Daño catastrófico si el valor de puntos de Casco se reduce a 0 o menos.

## 1. Comprobar Rango de detección y arco de fuego

En el combate espacial pocas armas tienen un alcance máximo real. Sin verse afectados por los efectos de la atmósfera y la gravedad - da igual que el disparo proceda de un percutor cinético o de un rayo térmico - los proyectiles pueden lanzarse a distancias infinitas.

Sin embargo, las naves necesitan ser capaces de predecir con precisión donde se encontrará el enemigo cuando el arma sea disparada, a fin de ajustar el disparo para que impacte en el objetivo.

Todo esto significa que cuando se disparan armas en Dropfleet, las características de Escáner y Señal se utilizan para determinar el rango efectivo de una nave.

**Escáner del atacante + Señal del objetivo = Rango del arma del atacante**.

El rango que una nave tiene para detectar a su objetivo es igual a la suma de la característica Señal del objetivo y el valor de Escáner del atacante.

Si el objetivo puede ser detectado, puede ser impactado potencialmente por los sistemas de armas de la nave atacante que puedan ser utilizados. Comrpueba la característica Arco de los sistemas de armas disponibles para el ataque de la nave, incluidos en su perfil correspondiente, y utiliza los arcos marcados en la base de la miniatura para comprobar si el objetivo está dentro del arco de fuego del sistema de armas correspondient, pudiendo en caso afirmativo ser elegidos como objetivos potenciales de dicho arma.

Como el espacio orbital es tridimensional, y debido a la habilida dde ver todas las otras miniaturas como se detalla previamente, las naves no se bloquean visión entre si a la hora de determinar objetivos de disparo. Esto se aplica incluso si viendo desde arriba la mesa de juego parece que una nave está oculta tras otra o ver la nave objetivo desde la posición del atacante de forma normal.

Las armas de corto alcance tienen un rango corto, y solo utilizan el valor de Escáner del atacante para determinar el rango del arma.

### Picos de energía

Ciertos eventos causan la aparición de Picos de energía que se colocan en las naves para marcar su estado actual. Los Picos de energía representan todo tipo de acciones o eventos que ayudan al enemigo en detectar y fijar blanco en una nave (uso de motores, disparar armas, o incluso fugas causadas por el daño en una nave o acciones de escaneado de naves enemigas). Los Picos de energía se clasifican en dos tipos: Menores y Mayores.

* **Un Pico de energía Menor incrementa la Señal de una nave en 6 hasta que es eliminado**.
* **Un Pico de energía Mayor incrementa las Señal de una nave en 12 hasta que es eliminado**.

Una nave solo puede tener un Pico a la vez. Si una nave tiene un Pico menor y obtiene otro mas, se convierte en un Pico mayor. Si una nave ya tiene un Pico mayor, ya brilla como un arbol de Navidad gigante y no recibe más picos hasta que el Pico mayor ha sido eliminado o reducido a Pico menor.

_Por ejemplo; una nave con una Señal de 6 gana un Pico menor. Su Señal contará como 12 hasta que el Pico sea eliminado. Si la nave gana otro Pico menor, el que tenía se transforma en su lugar en un Pico mayor, y la Señal de la nave cuenta como 18 hasta que el Pico mayor es eliminado_.

Usa el dial de estado de la base de la nave para marcar apropiadamente sus Picos de energía, girándolo apropiadamente cuando se ganan o pierden Picos. Los jugadores pueden utilizar marcadores alternativos para ello si desean.

## 2. Generar y distribuir dados de ataque

El número de ataques de un perfil de arma es el número de dados que se lanzan cuando dicho arma es disparada.

Las naves solo pueden disparar cada sistema de armas contra un único objetivo, no pueden distribuir sus dados de ataque sobre múltiples enemigos. Cuando se realiza la tirada de varios sistemas de armas con diferentes características a la vez, puede ser interesante utilizar dados con diferentes colores para marcar los diferentes tipos de sistemas de armas utilizados, en lugar de lanzar por cada uno separadamente.

Varios sistemas de armas lanza un número aleatorio de dados de ataque (por ejemplo, 1d6 o 1d3) los cuales se determinan cada vez que dicho arma dispara. Realiza una tirada para determinar cuantos ataques son generados por el sistema de armas antes de distribuir los dados en el objetivo correspondiente disponible.

Generalmente un grupo activo generalmente contiene  varias naves con sistemas de armas para disparar. **Todos los dados de ataque del Grupo deben ser ubicados entre los diferentes objetivos válidos disponibles antes de realizar cualquier tirada para impactar**. Esto ayuda a agilizar el juego y previene que un jugador optimice excesivamente sus disparos de una forma poco realista.

### Armas de corto alcance

Los sistemas de armas de corto alcance tienen un rango efectivo pequeño pero tienen una mayor cadencia de fuego y requieren menores cantidades de energía para ser utilizados.

Los sistemas de armas de corto alcance pueden ser disparados siempre, en adición a cualquier otro sistema de armas permitido por la orden dada a la nave. Si una nave no puede disparar sistemas de armas, tampoco podrá disparar los sistemas de armas de corto alcance en dicha acción.

## 3. Tirada para impactar

Cada sistema de armas tiene una característica de Puntería que indica el número mínimo en la tirada de cada dado que debe ser alcanzado o superado para lograr un impacto exitoso.

### Impacto crítico

**Cualquier dado de ataque que obtenga un resultado que supere en 2 o más el valor de Puntería del sistema de armas se considera que ha infligido un impacto crítico. El daño causado por este dado de ataque ignora la Salvación por armadura del objetivo, no pudiendo utilizarla para bloquear dicho daño**.

las Contramedidas pasivas pueden seguir utilizándose para salvar daño producido por impactos críticos utilizando su valor de Armadura adicional (ver siguientes apartados para detalles adicionales).

_por ejemplo, si un sistema de armas tiene un valor de Puntería de 4+, cada dado de ataque que resulte en un 6 ignorará la Salvación por armadura del objeetivo a la hora de determinar el daño causado en el Casco. Un sistema de armas con una Puntería de 3+ ignorará salvaciones por armadura en tiradas con resultados de 5 o 6_.

### Disparar entre Capas orbitales

Una nave que dispare de una capa orbital a otra sufre un penalizador de +1 al valor de Puntería del arma disparada (por ejemplo, una Puntería de 4+ se transforma en 5+).

### Disparar dentro o fuera de la Atmósfera

_La dificultad de disparar entre Capas orbitales aumenta al intentar disparar a través de la Atmósfera, donde disparar cualquier tipo de arma se vuelve altamente impreciso debido a pérdidas de energía, dispersiones de plasma, etc. he difficulty of shooting between Orbital Layers is compounded when shooting through Atmosphere, where firing anything from a laser to a mass driver becomes highly inaccurate as energy bleeds off and is lost, plasma disperses etc. Apuntar y causar daño de forma efectiva a naves o ciudades en la Atmósfera es más o menos similar a golpear un objeto en el fondo de un estanque lleno de limo.

**A menos que un sistema de armas esté específicamente diseñado para atacar en este tipo de situaciones, cualquier sistema de armas que dispare en la atmósfera o a ua nave ubicada en la Atmósfera tendrá un valor de Puntería para dicho ataque de 6+, independientemente de cualquier otro modificador. Además, el rango de detección para disparar se limita al valor de Escáner**. La Señal y Picos de energía son ignorados.

**Los sistemas de armas de corto alcance no pueden ser disparados hacia dentro o hacia fuera de la atmósfera**.

Ciertas reglas como Bombardeo o Aire/aire ignoran los penalizadores por disparar a través de capas orbitales. Dichas excepciones están cubiertas en la sección de reglas especiales o en los perfiles individuales de cada nave.

### Bombardeo

A veces, el mejor curso de acción es destruir el mismo planeta por el que se está luchando. Las naves pueden apuntar a Sectores como cualquier otro objetivo, pero se aplican las siguientes reglas. Consulte la sección Combate terrestre para obtener más detalles sobre sectores y grupos.

**Los Sectores solo pueden ser elegidos como objetivo por naves en Órbita baja** y siguen las mismas normas que cualquier otro elemento situado en la Atmósfera.

Si un Sector recibe daño, se realizan salvaciones igual que si fuera cualquier otra nave. Los Daños Críticos ignoran las salvaciones por armadura al igual que contra naves, pero dado que la mayoría de armas tendrán un valor de Puntería de 6+, únicamente las armas especializadas podrán causar impactos críticos. (por ejemplo, armas con la regla especial Bombardeo). **Únicamente pueden elegirse Sectores como objetivo de un sistema de armas si no contiene ningún activo terrestre amigo**.

Si un Sector sufre un punto de daño y el Sector está ocupado por Activos terrestres debes realizar una tirada para evaluar daños colaterales. Cada punto de daño causará un punto de daño en un Activo terrestre en dicho sector (las tiradas de salvación por armadura se tiran normalmente - ver la sección Activos terrestres para más detalles). El jugador que infligió el daño elige como distribuir este daño. Debe causarse un punto de daño a cada Activo terrestre antes de poder causar un segundo punto de daño a cualquiera de ellos.

Un sector que pierde todos sus puntos de Casco se convierte en ruinas. Cualquier Activo terrestre en el sector cuando esto ocurre es destruido con una tirada de 2+, para representar la devastación apocalíptica realizada a un area amplia de la superficie. Esto también elimina el valor estratégico del Sector. Las ruinas también pueden ser bombardeadas para tratar de eliminar activos terrestres, pero dado que las ruinas no tienen valor de Casco, no conservarán dicho daño causado en turnos posteriores.

### Ataque nuclear a una zona desde la órbita

_Todas las naves principales cargan un pequeño cargamento de cabezas nucleares para utilizar en circunstancias muy específicas_.

En partidas de Dropfleet Commander puede darse el caso que te encuentres en posición de lanzar uno de estos devastadores ataques contra un Sector, no obstante, para estar sobre aviso, esto puede suponer una reducción en el total de tus puntos de victoria por destruir infraestructura valiosa (ver la sección Escenarios para mas detalles).

Únicamente las naves con tonelaje **Medio, Pesado o Super Pesado** pueden lanzar un misil nuclear y hay una serie de condiciones que debes cumplir para poder realizar este ataque devastador:

* Debes ejecutar una orden que permita a la nave a disparar un sistema de armas este turno.
* La nave debe estar en Órbita baja y el sector objetivo para ser destruido en Rango de Escáner.
* Una nave solo puede lanzar un ataque nuclear por turno (en adición a cualquier otro disparo que normalmente pueda ejecutar).
* No puedes hacer objetivo a un sector que contenga Activos terrestres aliados.
* No puede haber naves enemigas a 12" del Sector objetivo.

Si el misil nuclear es lanzado, el Sector es destruido con una tirada de 2+. Si es destruido, cualquier activo terrestre que hubiese en él es eliminado del juego. ¡No quedará nada reseñable salvo ruinas! **Cada Sector localizado en la Zona de guerra también sufre 1 punto de daño** si el Sector objetivo fue destruido (las salvaciones por armadura se realizan de la forma habitual).
