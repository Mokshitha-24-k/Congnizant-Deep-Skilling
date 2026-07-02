package com.cognizant.junit;
import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class CalculatorTest {
   Calculator cal=new Calculator();

   @Test
   public void testAddition()
   {
    assertEquals(8,cal.add(5,3));
   }

}
