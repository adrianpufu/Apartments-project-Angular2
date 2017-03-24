import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let apartments = [
            { id: 1, rooms: 2, baths: 1, address: "addressforap1", surface: 65.4, price: 50 },
            { id: 2, rooms: 3, baths: 2, address: "addressforap2", surface: 80.7, price: 65 }
        ];

        return { apartments };
    }
}
