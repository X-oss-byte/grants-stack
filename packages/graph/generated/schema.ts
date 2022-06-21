// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Program extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Program entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Program must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Program", id.toString(), this);
    }
  }

  static load(id: string): Program | null {
    return changetype<Program | null>(store.get("Program", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get roles(): Array<string> {
    let value = this.get("roles");
    return value!.toStringArray();
  }

  set roles(value: Array<string>) {
    this.set("roles", Value.fromStringArray(value));
  }

  get accounts(): Array<string> {
    let value = this.get("accounts");
    return value!.toStringArray();
  }

  set accounts(value: Array<string>) {
    this.set("accounts", Value.fromStringArray(value));
  }
}

export class Role extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Role entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Role must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Role", id.toString(), this);
    }
  }

  static load(id: string): Role | null {
    return changetype<Role | null>(store.get("Role", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get role(): string {
    let value = this.get("role");
    return value!.toString();
  }

  set role(value: string) {
    this.set("role", Value.fromString(value));
  }

  get accounts(): Array<string> | null {
    let value = this.get("accounts");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set accounts(value: Array<string> | null) {
    if (!value) {
      this.unset("accounts");
    } else {
      this.set("accounts", Value.fromStringArray(<Array<string>>value));
    }
  }

  get program(): string {
    let value = this.get("program");
    return value!.toString();
  }

  set program(value: string) {
    this.set("program", Value.fromString(value));
  }
}

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Account entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Account must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Account", id.toString(), this);
    }
  }

  static load(id: string): Account | null {
    return changetype<Account | null>(store.get("Account", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): string {
    let value = this.get("address");
    return value!.toString();
  }

  set address(value: string) {
    this.set("address", Value.fromString(value));
  }

  get role(): string {
    let value = this.get("role");
    return value!.toString();
  }

  set role(value: string) {
    this.set("role", Value.fromString(value));
  }

  get program(): string {
    let value = this.get("program");
    return value!.toString();
  }

  set program(value: string) {
    this.set("program", Value.fromString(value));
  }
}