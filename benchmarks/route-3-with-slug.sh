PORT_EXPRESS=3000
PORT_EXPRESS_REACT_ROUTER=3001
CONCURRENCY=600
NUM=1000

ab -c ${CONCURRENCY} -n ${NUM} http://localhost:${PORT_EXPRESS}/route-3/slug
ab -c ${CONCURRENCY} -n ${NUM} http://localhost:${PORT_EXPRESS_REACT_ROUTER}/route-3/slug
