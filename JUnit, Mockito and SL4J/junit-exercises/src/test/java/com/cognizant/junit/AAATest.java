package com.cognizant.junit;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class AAATest {

    Calculator cal;
    @Before
    public void setUp() {
        cal = new Calculator();
    }

    @After
    public void tearDown() {
        cal = null;
    }

    @Test
public void testAddition() {

    // Arrange
    int a = 5;
    int b = 3;

    // Act
    int result = cal.add(a, b);

    // Assert
    assertEquals(8, result);
}

}