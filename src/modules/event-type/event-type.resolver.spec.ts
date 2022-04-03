import { Test, TestingModule } from '@nestjs/testing';
import { EventTypesResolver } from './event-type.resolver';
import { EventTypeService } from './event-type.service';

describe('EventTypesResolver', () => {
  let resolver: EventTypesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventTypesResolver, EventTypeService],
    }).compile();

    resolver = module.get<EventTypesResolver>(EventTypesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
