const request = require("supertest");
const express = require("express");
const app = require("./app"); // atau langsung masukkan express app ke file test

describe("Test API /menu", () => {
  it("GET /menu harus kembalikan data array", async () => {
    const res = await request(app).get("/menu");
    expect(res.statusCode).toBe(200);
    expect(res.body.data).toBeInstanceOf(Array);
  });

  it("POST /menu harus menambah item baru", async () => {
    const res = await request(app).post("/menu").send({ item: "Susu" });
    expect(res.statusCode).toBe(201);
    expect(res.body.data).toContain("Susu");
  });
});
